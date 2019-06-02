class Board {
    constructor(drawer = false, sizeX, sizeY) {
        if (drawer) {
            this.drawer = drawer;
            this.drawer.attachBoard(this);
            this.size = this.drawer.boardSize;
        } else {
            this.size = {
                x: sizeX,
                y: sizeY
            }
        }
        this.board = [];
        this.emptySlots = [];
        for (let x = 0; x < this.size.x; x++) {
            this.board[x] = [];
            for (let y = 0; y < this.size.y; y++) {
                this.board[x][y] = new Hexagon(UnitType.empty);
                this.emptySlots.push(this.board[x][y]);
            }
        }
        this.topNode = new Hexagon(UnitType.red, true);
        this.bottomNode = new Hexagon(UnitType.red, true);
        this.leftNode = new Hexagon(UnitType.blue, true);
        this.rightNode = new Hexagon(UnitType.blue, true);
        this.setNeighbours(this);
    }

    setNeighbours(board) {
        let neighbours = [
            [-1, 0],//left
            [1, 0],//right
            [0, -1],//top left
            [1, -1],//top right
            [-1, 1],//bottom left
            [0, 1],//bottom right
        ];

        for (let x = 0; x < board.size.x; x++)
            for (let y = 0; y < board.size.y; y++) {
                let hexNeighbours = [];
                for (let [nX, nY] of neighbours) {
                    let hX = x + nX;
                    let hY = y + nY;
                    if (board.isValid(hX, hY))
                        hexNeighbours.push(board.board[hX][hY]);
                }

                let hexagon = board.board[x][y];

                if (x === 0) {
                    hexNeighbours.push(board.leftNode);
                    board.leftNode.neighbours.push(hexagon);
                }
                if (y === 0) {
                    hexNeighbours.push(board.topNode);
                    board.topNode.neighbours.push(hexagon);
                }
                if (x === board.size.x - 1) {
                    hexNeighbours.push(board.rightNode);
                    board.rightNode.neighbours.push(hexagon);
                }
                if (y === board.size.y - 1) {
                    hexNeighbours.push(board.bottomNode);
                    board.bottomNode.neighbours.push(hexagon);
                }

                hexagon.neighbours = hexNeighbours;
            }
    }

    copy() {
        let board = new Board(false, this.size.x, this.size.y);
        board.emptySlots = [];
        for (let x = 0; x < this.size.x; x++)
            for (let y = 0; y < this.size.y; y++) {
                let hexCopy = this.board[x][y].copy();
                board.board[x][y] = hexCopy;
                if (hexCopy.type === UnitType.empty)
                    board.emptySlots.push(hexCopy);
            }

        board.topNode = this.topNode.copy();
        board.bottomNode = this.bottomNode.copy();
        board.leftNode = this.leftNode.copy();
        board.rightNode = this.rightNode.copy();
        this.setNeighbours(board);
        return board;
    }

    isValid(x, y) {
        return x >= 0 && y >= 0 && x < this.size.x && y < this.size.y;
    }

    doMove(x, y, type) {
        let hexagon = this.board[x][y];
        if (hexagon.type === UnitType.empty) {
            this.setHex(hexagon, type);
        }
    }

    undoMove(x, y) {
        let hexagon = this.board[x][y];
        this.unsetHex(hexagon);
    }

    setHex(hexagon, type) {
        hexagon.type = type;
        this.emptySlots.splice(this.emptySlots.indexOf(hexagon), 1);
    }

    unsetHex(hexagon) {
        hexagon.type = UnitType.empty;
        this.emptySlots.push(hexagon);
    }

    distance([xA, yA], [xB, yB]) {
        return Math.sqrt((xA - xB) ** 2 + (yA - yB) ** 2);
    }

    pixelToBoardPosition(pixelX, pixelY) {
        let nearestDistance = Infinity;
        let nearestHex;

        for (let x = 0; x < this.size.x; x++) {
            for (let y = 0; y < this.size.y; y++) {
                let hexagon = this.board[x][y];
                let distance = this.distance(hexagon.pixelPosition, [pixelX, pixelY]);
                if (distance < nearestDistance) {
                    nearestDistance = distance;
                    nearestHex = [x, y];
                }
            }
        }

        return nearestHex;
    }
}