class Track {
    constructor(width, height) {
        let now = performance.now();
        [this.track, this.points] = this.generateTrack(width, height);
        console.log(performance.now() - now);
    }

    intersects(polygon, newPoint) {
        if (polygon.length <= 2) return false;

        let [[p, q], [r, s]] = [polygon[polygon.length - 1], newPoint];
        for (let i = 0; i < polygon.length - 1; i++) {
            let [[a, b], [c, d]] = polygon.slice(i);

            var det, gamma, lambda;
            det = (c - a) * (s - q) - (r - p) * (d - b);
            if (det === 0) {
                continue;
            } else {
                lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
                gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
                let intersects = (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
                if (intersects) return true; else continue;
            }
        }
        return false;
    }

    finishTrack(head, tail) {
        for (let i = 0; i < tail.length; i++) {
            let point = tail[i];
            let intersects = this.intersects(head, point);
            if (intersects)
                return false;
            else {
                tail.splice(i, 1);
                let newHead = head.concat([point]);
                if (tail.length === 0)
                    return newHead;
                return this.finishTrack(newHead, tail);
            }
        }

        return head;
    }

    generateTrack(width, height) {
        let now = performance.now();
        let i = 0;
        let timeout = 1000;
        while (true) {
            if (i++ % 10000 === 0 && performance.now() - now > timeout)
                return console.log("Timeout reached, failed");

            let points = this.generatePoints(width, height, 8);
            let track = this.finishTrack([points[0], points[points.length - 1]], JSON.parse(JSON.stringify(points)));
            if (track)
                return [points, track];
        }
    }

    generatePoints(width, height, n = 15) {
        let result = [];
        for (let i = 0; i < n; i++) {
            let point = [Math.floor(Math.random() * width), Math.floor(Math.random() * height)];
            result.push(point);
        }
        return result;
    }

    draw(context) {
        context.strokeStyle = 'white';
        context.beginPath();
        let firstPoint = this.track[this.track.length - 1];
        context.moveTo(...firstPoint);
        let i;
        for (i = 0; i < this.track.length - 1; i++) {
            let [x, y] = this.track[i];
            let [x1, y1] = this.track[i + 1]
            var xc = (x + x1) / 2;
            var yc = (y + y1) / 2;
            context.quadraticCurveTo(x, y, xc, yc);
        }
        context.quadraticCurveTo(...this.track[i], ...this.track[0]);
        context.lineWidth = 3;
        context.stroke();

        let size = 10;
        for (let i = 0; i < this.points.length; i++) {
            let [x, y] = this.points[i];
            context.fillStyle = `hsl(0, 100%, ${(Math.floor(i / this.points.length * 100))}%)`;
            context.fillRect(x - size / 2, y - size / 2, size, size);
        }
    }
}