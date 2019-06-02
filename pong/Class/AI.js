class AI {
    constructor(paddle) {
        this.paddle = paddle;
        this.ball = MAIN.game.ball;
        this.difficulty = 2;
    }

    set difficulty(v) {
        if (v > 5) {
            this.extraHard = true;
            this.maxMoveSpeed = v - 3;
        } else {
            this.extraHard = false;
            this.maxMoveSpeed = v;
        }
        this._difficulty = v;
    }
    get difficulty() {
        return this._difficulty;
    }

    control() {
        this.stop();
        this.loop = MAIN.loop.add(() => this.update());
    }

    stop() {
        if (this.loop)
            MAIN.loop.remove(this.loop);
    }

    update() {
        let targetpos = (this.paddle.position.y + this.paddle.height / 2);

        if (this.extraHard) {
            let ballSpeedY = this.ball.velocity.y;
            if (ballSpeedY > 0) {
                targetpos = this.paddle.position.y + this.paddle.height - this.ball.radius;
            } else {
                targetpos = this.paddle.position.y + this.ball.radius;
            }
        }

        let distance = this.ball.position.y - targetpos;
        distance = distance > this.maxMoveSpeed ? this.maxMoveSpeed : distance;
        distance = distance < -this.maxMoveSpeed ? -this.maxMoveSpeed : distance;
        this.paddle.move(distance);
    }
}
