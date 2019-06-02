class Paddle extends Rectangle {
    constructor(x = 10, height = 60) {
        super(x, MAIN.canvas.height / 2 - height / 2, 10, height);

        this.moveSpeed = 1;
        this.score = 0;
    }

    set AIControlled(v) {
        MAIN.msg('AI Control is now o' + (v ? 'n' : 'ff'));
        if (v) {
            if (!this.AI)
                this.AI = new AI(this);
            this.AI.control();
        } else
            this.AI.stop();
        this._AIControlled = v;
    }
    get AIControlled() {
        return this._AIControlled;
    }

    reset() {
        this.position.set(this.position.x, MAIN.canvas.height / 2 - this.height / 2);
    }

    addPoint() {
        this.score++;
        this.reset();
    }

    move(v) {
        this.position.y += v;
    }

    getNormal(ball) {
        let hitPos = 0.5 - (ball.position.y - this.position.y) / this.height;
        //0.5 = high hit
        //0 = center hit
        //-0.5 = low hit
        return new Vector2(ball.position.x > this.position.x ? -1 : 1, hitPos / 2);
    }
}
