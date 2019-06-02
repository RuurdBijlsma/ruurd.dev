class Ball {
    constructor(collidables, radius = 5) {
        this.radius = radius;
        this.collidables = collidables;

        this.restitution = 1.05;

        this.position = new Vector2;
        this.reset();
    }

    reset() {
        this.stopMoving();
        this.position.set(MAIN.canvas.width / 2, MAIN.canvas.height / 2);
        this.setVelocity(new Vector2(Math.random() > 0.5 ? -4 : 4, 0.005 - Math.random() / 100));
    }

    stopMoving() {
        if (this.loop)
            MAIN.loop.remove(this.loop);
        this.velocity = new Vector2;
    }

    setVelocity(velocity) {
        if (this.loop)
            MAIN.loop.remove(this.loop);

        this.velocity = velocity;

        this.loop = MAIN.loop.add(() => this.update());
    }

    update() {
        this.position.add(this.velocity);

        for (let collidable of this.collidables) {
            let normal = collidable.ballCollision(this);
            if (normal) {
                this.velocity.reflect(normal);
                if (collidable instanceof Paddle)
                    this.velocity.multiplyScalar(this.restitution);
            }
        }
        if (this.position.x > MAIN.canvas.width) {
            MAIN.game.paddles.left.addPoint();
            this.reset();
        } else if (this.position.x < 0) {
            MAIN.game.paddles.right.addPoint();
            this.reset();
        }
    }

    draw(context) {
        context.fillStyle = 'white';
        context.beginPath();
        context.ellipse(this.position.x, this.position.y, this.radius, this.radius, 0, Math.PI * 2, 0);
        context.fill();
    }
}
