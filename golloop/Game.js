class Game {
    constructor(canvas) {
        this.pixelSize = 10;
        this.tps = 30;
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.updateSize();
        window.addEventListener('resize', () => this.updateSize());

        let down = false;
        let color = 0;
        this.canvas.addEventListener('mousedown', e => {
            down = true;
            let x = Math.floor(e.pageX / this.pixelSize);
            let y = Math.floor(e.pageY / this.pixelSize);
            let alive = this.getPixel(x, y);
            color = alive ? 0 : 255;

            this.setPixel(x, y, color);
        });

        this.canvas.addEventListener('mousemove', e => {
            if (down) {
                let x = Math.floor(e.pageX / this.pixelSize);
                let y = Math.floor(e.pageY / this.pixelSize);
                this.setPixel(x, y, color);
            }
        });

        document.addEventListener('mouseup', e => {
            down = false;
        });

        document.addEventListener('keypress', e => {
            console.log(e.key);
            switch (e.key) {
                case ' ':
                    if (this.ticking) {
                        this.stopInterval();
                    } else {
                        this.startInterval();
                    }
                    break;
                case '=':
                    this.pixelSize++;
                    this.updateSize();
                    break;
                case '-':
                    this.pixelSize--;
                    this.pixelSize = Math.max(this.pixelSize, 1);
                    this.updateSize();
                    break;
                case '.':
                    this.tps += 5;
                    this.stopInterval();
                    this.startInterval();
                    break;
                case ',':
                    this.tps -= 5;
                    this.tps = Math.max(this.tps, 1);
                    this.stopInterval();
                    this.startInterval();
                    break;
                case 'r':
                    this.reset();
                    this.stopInterval();
                    break;
            }
        })

        this.startInterval();
    }

    reset() {
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.fillStyle = 'white';
        this.context.fillRect(1, 0, 1, 1);
        this.context.fillRect(2, 1, 1, 1);
        this.context.fillRect(0, 2, 1, 1);
        this.context.fillRect(1, 2, 1, 1);
        this.context.fillRect(2, 2, 1, 1);
    }

    getPixel(x, y) {
        let image = this.context.getImageData(0, 0, this.width, this.height);
        let pixels = image.data;
        return this.getState(pixels, x, y);
    }

    setPixel(x, y, value) {
        let image = this.context.getImageData(0, 0, this.width, this.height);
        let pixels = image.data;
        this.setState(pixels, x, y, value);
        this.context.putImageData(image, 0, 0);
    }

    startInterval() {
        this.ticking = setInterval(() => this.tick(), 1000 / this.tps);
    }

    stopInterval() {
        clearInterval(this.ticking);
        this.ticking = false;
    }

    updateSize() {
        this.width = Math.floor(window.innerWidth / this.pixelSize);
        this.height = Math.floor(window.innerHeight / this.pixelSize);
        this.canvas.style.width = this.width * this.pixelSize;
        this.canvas.style.height = this.height * this.pixelSize;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.reset();
    }

    tick() {
        let image = this.context.getImageData(0, 0, this.width, this.height);
        let pixels = image.data;
        let born = [];
        let died = [];
        for (let i = 0; i < pixels.length; i += 4) {
            let x = (i / 4) % this.width;
            let y = Math.floor(i / 4 / this.width);

            let neighbourCount = this.getNeighbourCount(pixels, x, y);

            let alive = this.getState(pixels, x, y);
            if (alive) {
                if (neighbourCount < 2 || neighbourCount > 3)
                    died.push([x, y])
            } else {
                if (neighbourCount === 3)
                    born.push([x, y])
            }
        }
        for (let [x, y] of died)
            this.setState(pixels, x, y, 0);
        for (let [x, y] of born)
            this.setState(pixels, x, y, 255);
        this.context.putImageData(image, 0, 0);
    }

    getNeighbourCount(pixels, x, y) {
        let neighbours = [
            [-1, -1],   // top left
            [0, -1],    // top
            [1, -1],    // top right
            [-1, 1],    // bottom left
            [0, 1],     // bottom
            [1, 1],     // bottom right
            [-1, 0],    // left
            [1, 0],     // right
        ];
        let count = 0;
        for (let [dX, dY] of neighbours) {
            let nX = (x + dX) % this.width;
            if (nX < 0) nX = this.width + nX;
            let nY = (y + dY) % this.height;
            if (nY < 0) nY = this.height + nY;

            if (this.getState(pixels, nX, nY))
                // if (++count >= 4) break;
                count++;
        }
        return count;
    }

    getState(pixels, x, y) {
        let i = y * this.width + x;
        i *= 4;
        return pixels[i] > 0;
    }

    setState(pixels, x, y, value) {
        let i = y * this.width + x;
        i *= 4;
        pixels[i] = value;
        pixels[i + 1] = value;
        pixels[i + 2] = value;
        pixels[i + 3] = value;
    }
}