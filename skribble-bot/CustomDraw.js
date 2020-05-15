import IDraw from "./IDraw.js";
import SkribbleBot from "./SkribbleBot.js";

class CustomDraw extends IDraw {
    constructor() {
        let colours = [
            [255, 255, 255],
            [0, 0, 0],
            [193, 193, 193],
            [76, 76, 76],
            [239, 19, 11],
            [116, 11, 7],
            [255, 113, 0],
            [194, 56, 0],
            [255, 228, 0],
            [232, 162, 0],
            [0, 204, 0],
            [0, 85, 16],
            [0, 178, 255],
            [0, 86, 158],
            [35, 31, 211],
            [14, 8, 101],
            [163, 0, 186],
            [85, 0, 105],
            [211, 124, 170],
            [167, 85, 116],
            [160, 82, 45],
            [99, 48, 13]
        ];
        let brushes = [1, 3, 5];
        super(colours, brushes);

        this.brushSize = 1;
        this.scale = 1;
    }

    async moveBrush(path) {
        await SkribbleBot.waitSleep(Math.random() * 50);
        for (let [x, y] of path) {
            await SkribbleBot.waitSleep(Math.random() * 5);
            this.context.beginPath();
            this.context.arc(x * this.scale, y * this.scale, this.brushSize * this.scale, 0, 2 * Math.PI);
            this.context.fill();
        }
    }

    async fill(colour) {
        this.context.fillStyle = this.toRgb(colour);
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    async setColour(colour) {
        this.context.fillStyle = this.toRgb(colour);
    }

    async setBrushSize(size) {
        this.brushSize = size;
    }

    toRgb(colour) {
        return `rgb(${colour[0]},${colour[1]},${colour[2]})`;
    }

    setCanvas(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
    }

    setScale(scale) {
        this.scale = scale;
    }
}

export default new CustomDraw();