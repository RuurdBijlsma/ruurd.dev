class Game {
    constructor() {
        this.paddles = {
            left: new Paddle(10),
            right: new Paddle(MAIN.canvas.width - 20)
        }

        this._playHeight = MAIN.canvas.height - 20;

        this.walls = {
            top: new Wall(MAIN.canvas.height / 2 - this.playHeight / 2 - 10),
            bottom: new Wall(MAIN.canvas.height / 2 + this.playHeight / 2)
        }

        this.rectangles = [
            this.walls.top,
            this.walls.bottom,
            this.paddles.left,
            this.paddles.right
        ]

        this.ball = new Ball(this.rectangles);
    }
    set playHeight(v) {
        this.walls.top.position.y = MAIN.canvas.height / 2 - v / 2 - 10;
        this.walls.bottom.position.y = MAIN.canvas.height / 2 + v / 2;
        this._playHeight = v;
    }
    get playHeight() {
        return this._playHeight;
    }
}
