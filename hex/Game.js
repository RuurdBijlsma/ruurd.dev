class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.board = new Board(new BoardDrawer(11, 11, 20, 4));
        this.computer = new Computer();
        this.loop = new GameLoop(60);
        this.loop.add(() => this.tick());
        this.currentPlayer = UnitType.red;
        this.moves = [];
        this.resizeCanvas(window.innerWidth, window.innerHeight);
        window.addEventListener('resize', () => this.resizeCanvas(window.innerWidth, window.innerHeight));
        canvas.addEventListener('click', e => this.clickCanvas(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop));
        this.setKeyMap();
    }

    setKeyMap() {
        document.addEventListener('keydown', e => {
            console.log(e.key);
            if (e.ctrlKey) {
                switch (e.key) {
                    case 'z':
                        this.undoMove();
                        this.switchPlayers();
                        break;
                }
            } else {
                switch (e.key) {
                }
            }
        });
    }

    computerMove() {
        let [x, y] = this.computer.getBestMove(this.board);
        doMove(x, y, this.currentPlayer);
    }

    clickCanvas(x, y) {
        let [hexX, hexY] = this.board.pixelToBoardPosition(x, y);
        this.doMove(hexX, hexY, this.currentPlayer);
    }

    doMove(x, y, type) {
        let hexagon = this.board.board[x][y];
        if (hexagon.type !== UnitType.empty)
            return false;

        this.moves.push({ move: [x, y], type });
        this.board.doMove(x, y, type);

        let winner = this.computer.findWinner(this.board);
        if (winner !== UnitType.empty) {
            alert("Winner!", winner);
        }

        this.switchPlayers();

        return true;
    }

    switchPlayers() {
        if (this.currentPlayer === UnitType.red)
            this.currentPlayer = UnitType.blue;
        else this.currentPlayer = UnitType.red;
    }

    undoMove() {
        if (this.moves.length === 0) return;
        let [x, y] = this.moves.pop().move;
        this.board.undoMove(x, y);
    }

    tick() {

    }

    render() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        let xPos = this.canvas.width / 2 - this.board.drawer.width / 2;
        let yPos = this.canvas.height / 2 - this.board.drawer.height / 2;
        this.board.drawer.draw(this.context, xPos, yPos);
        this.drawLines();

        requestAnimationFrame(() => this.render());
    }

    drawLines() {
        this.context.lineWidth = 10;
        this.context.beginPath();
        this.context.moveTo(0, 0);
        this.context.lineTo(window.innerWidth, 0);
        this.context.moveTo(0, window.innerHeight);
        this.context.lineTo(window.innerWidth, window.innerHeight);
        this.context.strokeStyle = UnitType.red;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(0, 0);
        this.context.lineTo(0, window.innerHeight);
        this.context.moveTo(window.innerWidth, 0);
        this.context.lineTo(window.innerWidth, window.innerHeight);
        this.context.strokeStyle = UnitType.blue;
        this.context.stroke();
    }

    resizeCanvas(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.render();
    }
}