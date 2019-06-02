class Rectangle {
    constructor(x, y, width, height) {
        this.position = new Vector2(x, y);
        this.width = width;
        this.height = height;
    }

    ballCollision(ball) {
        let ballTL = ball.position.clone().sub(new Vector2(ball.radius, ball.radius)),
            ballSize = ball.radius * 2;

        if (this.position.x < ballTL.x + ballSize &&
            this.position.x + this.width > ballTL.x &&
            this.position.y < ballTL.y + ballSize &&
            this.height + this.position.y > ballTL.y) {
            return this.getNormal(ball);
        }
    }

    getNormal(ball) { console.error('This should be overridden') }

    draw(context) {
        context.fillStyle = 'white';
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}
