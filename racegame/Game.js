class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.car = new Car();
        this.track = new Track(window.innerWidth, window.innerHeight);
        this.loop = new GameLoop(60);
        this.loop.add(() => this.tick());
        this.keyboard = new Keyboard(this.loop);
        this.resizeCanvas(window.innerWidth, window.innerHeight);
        this.setKeyMap();
    }

    setKeyMap() {
        this.keyboard.setContinuousKey("ArrowRight", "Turn Right", () => this.car.turn());
        this.keyboard.setContinuousKey("ArrowLeft", "Turn Left", () => this.car.turn(-1));
        this.keyboard.setContinuousKey("ArrowUp", "Accelerate", () => this.car.accelerate());
        this.keyboard.setContinuousKey("ArrowDown", "Decelerate", () => this.car.accelerate(-1));
    }

    tick() {
        this.car.tick();
    }

    drawMap() {
        this.context.fillStyle = 'green';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.track.draw(this.context);
    }

    render() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.drawMap();
        // this.car.draw(this.context);

        requestAnimationFrame(() => this.render());
    }

    resizeCanvas(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.render();
    }

    static drawRotated(context, drawFunction, rotation, rotateX, rotateY) {
        context.translate(rotateX, rotateY);
        context.rotate(rotation);
        drawFunction(context);
        context.restore();
        context.rotate(-rotation);
        context.translate(-rotateX, -rotateY);
    }
}