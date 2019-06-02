class BoardDrawer {
    constructor(boardSizeX, boardSizeY, hexSize = 20, gapSize = 2) {
        this.hexSize = hexSize;
        this.gapSize = gapSize;
        this.boardSize = { x: boardSizeX, y: boardSizeY };
    }

    attachBoard(board) {
        this.board = board;
    }

    get width() {
        return this.boardSize.x * this.hexSize * DrawUtils.hexagonWidth
            + (this.boardSize.x - 1) * this.gapSize
            + (this.boardSize.y - 1) * this.hexSize * DrawUtils.hexagonWidth / 2
            + (this.boardSize.y - 1) * this.gapSize / 2;
    }

    get height() {
        return this.boardSize.y * this.hexSize * 1.55 +
            (this.boardSize.y - 1) * this.gapSize +
            this.hexSize * 0.5;
    }

    draw(context, xPos = 0, yPos = 0) {
        this.xPos = xPos;
        this.yPos = yPos;

        context.fillStyle = 'red';
        context.strokeStyle = 'rgba(255,255,255,0.3)';
        context.lineWidth = 1;

        let heightStep = this.hexSize * 1.55 + this.gapSize;
        let widthStep = this.hexSize * DrawUtils.hexagonWidth + this.gapSize;
        let xOffset = 0;

        for (let y = 0; y < this.boardSize.y; y++) {
            for (let x = 0; x < this.boardSize.x; x++) {
                context.fillStyle = this.board.board[x][y].type;
                let pixelX = xPos + x * widthStep + xOffset;
                let pixelY = yPos + y * heightStep;
                this.board.board[x][y].pixelPosition = [pixelX + widthStep / 2, pixelY + this.hexSize];
                DrawUtils.drawHexagon(context, pixelX, pixelY, this.hexSize, true, false);
                DrawUtils.drawHexagon(context, xPos + x * widthStep + xOffset, yPos + y * heightStep, this.hexSize, false, false);
            }
            xOffset += DrawUtils.hexagonWidth * widthStep / 3.5;
        }
    }
}