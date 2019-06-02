class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    distance(pos) {
        let distX = Math.abs(pos.x - this.x) * Game.ratio,
            distY = Math.abs(pos.y - this.y);

        return Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));
    }
}
