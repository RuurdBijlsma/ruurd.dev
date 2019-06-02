class Circle {
    constructor(center, radius, resolution = 50) {
        this.points = [];

        this.radius = radius;
        this.center = center;
        this.resolution = resolution;
        this.step = Math.PI * 2 / this.resolution;

        this.generatePoints();
    }
    generatePoints() {
        let x, y, angle = 0;
        this.points=[];

        for (let i = 0; i < this.resolution; i++) {
            x = this.radius * Math.cos(angle) + this.center.x;
            y = this.radius * Math.sin(angle) + this.center.y;

            angle += this.step;
            this.points.push(new Point(x, y));
        }
    }
    setResolution(res) {
        this.resolution = res;
        this.step = Math.PI * 2 / this.resolution;
        this.generatePoints();
    }
    setSize(center, radius){
        this.radius = radius;
        this.center = center;
        this.generatePoints();
    }
    getPoint(location) {
        let angle = location * this.step,
            x = this.radius * Math.cos(angle) + this.center.x,
            y = this.radius * Math.sin(angle) + this.center.y;
        return new Point(x, y);
    }
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    distanceTo(point) {
        return Math.sqrt(Math.pow(Math.abs(this.x - point.x), 2) + Math.pow(Math.abs(this.x - point.x), 2));
    }
    toString() {
        return `${this.x}, ${this.y}`;
    }
}
