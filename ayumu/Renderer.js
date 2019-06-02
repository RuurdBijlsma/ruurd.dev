class Renderer {
    constructor(canvas) {
        this.hideEveryGridSpace = false;

        this.canvas = canvas;
        this.context = canvas.getContext('2d');


        window.addEventListener('resize', () => this.resize());
    }

    attachGrid(grid) {
        this.grid = grid;
        this.tileSize = this.getTileSize();

        this.resize();
        this.draw();
    }

    resize() {
        this.tileSize = this.getTileSize();
        this.canvas.width = this.tileSize * this.grid.width;
        this.canvas.height = this.tileSize * this.grid.height;
        this.canvas.style.width = this.canvas.width;
        this.canvas.style.height = this.canvas.height;
    }

    getTileByPixel(x, y) {
        return [Math.floor(x / this.tileSize), Math.floor(y / this.tileSize)];
    }

    draw() {
        // this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = 'black';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = 'white';

        let padding = this.tileSize / 10;

        for (let x = 0; x < this.grid.width; x++) {
            for (let y = 0; y < this.grid.height; y++) {
                let pixelX = this.tileSize * x,
                    pixelY = this.tileSize * y;

                let gridData = this.grid.data[x][y];

                if (gridData.visible) {
                    let fontSize = Math.ceil(this.tileSize / 2);
                    this.context.font = fontSize + "px Verdana";
                    let size = this.context.measureText(gridData.value).width;
                    this.context.fillText(gridData.value, pixelX + this.tileSize / 2 - size / 2, pixelY + fontSize / 2 + this.tileSize / 2);
                } else if (this.hideEveryGridSpace || gridData.value !== -1) {
                    this.context.fillRect(pixelX + padding, pixelY + padding, this.tileSize - padding * 2, this.tileSize - padding * 2);
                }
            }
        }

        requestAnimationFrame(() => this.draw());
    }

    getTileSize() {
        let tileSizes = [
            Math.floor(innerWidth / this.grid.width),
            Math.floor(innerHeight / this.grid.height),
        ];

        for (let size of tileSizes)
            if (size * this.grid.width <= innerWidth && size * this.grid.height <= innerHeight)
                return size;

        console.warn("HNONOONONONON");
    }
}