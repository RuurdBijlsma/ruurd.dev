class Wall extends Rectangle {
    constructor(y) {
        super(0, y, MAIN.canvas.width, 10);
    }

    getNormal(ball) {
        return new Vector2(0, ball.position.y > this.position.y ? -1 : 1);
    }
}