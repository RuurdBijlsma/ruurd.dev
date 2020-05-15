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
        let brushes = [1, 2, 4, 8];
        super(colours, brushes);

        this.scale = 1;
    }

    async moveBrush(path) {
        let canvas = document.querySelector('#canvasGame');
        let { x, y } = canvas.getBoundingClientRect();

        for (let i = 0; i < path.length; i++) {
            if (i === 0) {
                this.triggerMouseEvent(canvasPoint, "mousedown");
                await SkribbleBot.waitSleep(20);
            }

            let [pX, pY] = path[i];
            let canvasPoint = document.elementFromPoint(x + pX * this.scale, y + pY * this.scale);
            this.triggerMouseEvent(canvasPoint, "mousemove");
            await SkribbleBot.waitSleep(2);

            if (i === path.length - 1) {
                this.triggerMouseEvent(canvasPoint, "mouseup");
                await SkribbleBot.waitSleep(20);
            }
        }
    }

    async selectPen() {
        let penTool = document.querySelector('.tool[data-tool="pen"]');
        penTool.click();
        await SkribbleBot.waitSleep(20);
    }

    async fill(colour) {
        this.setColour(colour);
        let fillTool = document.querySelector('.tool[data-tool="fill"]');
        fillTool.click();

        await SkribbleBot.waitSleep(20);

        let canvas = document.querySelector('#canvasGame');
        let { x, y, width, height } = canvas.getBoundingClientRect();
        let canvasPoint = document.elementFromPoint(x + width / 2, y + height / 2);

        this.triggerMouseEvent(canvasPoint, "mousedown");
    }

    async setColour(colour) {
        let colourElement = document.querySelector(`.colorItem[style="background: ${this.toHex(colour)}"]`);
        colourElement.click();
        await SkribbleBot.waitSleep(20);
    }

    async setBrushSize(size) {
        let brushButton;
        switch (size) {
            case 1:
                brushButton = document.querySelector('.brushSize[data-size="0"]');
                break;
            case 1:
                brushButton = document.querySelector('.brushSize[data-size="0.15"]');
                break;
            case 1:
                brushButton = document.querySelector('.brushSize[data-size="0.45"]');
                break;
            case 1:
            default:
                brushButton = document.querySelector('.brushSize[data-size="1"]');
                break;
        }
        brushButton.click();
        await SkribbleBot.waitSleep(20);
    }

    toHex(colour) {
        return '#' + colour.map(i => i.toString(16).toUpperCase().padStart(2, '0')).join('');
    }

    toRgb(colour) {
        return `rgb(${colour[0]},${colour[1]},${colour[2]})`;
    }

    setScale(scale) {
        this.scale = scale;
    }

    triggerMouseEvent(node, eventType) {
        let clickEvent = document.createEvent('MouseEvents');
        clickEvent.initEvent(eventType, true, true);
        node.dispatchEvent(clickEvent);
    }
}

export default new CustomDraw();