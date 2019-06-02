class Computer {
    getBestMove(board, depth = 2) {

    }

    findWinner(board) {
        let redWon = board.topNode.getAllNeighboursOfSameType().filter(n => n.winnerNode).length === 2;
        if (redWon) return UnitType.red;

        let blueWon = board.leftNode.getAllNeighboursOfSameType().filter(n => n.winnerNode).length === 2;
        if (blueWon) return UnitType.blue;

        return UnitType.empty;
    }

    isWinner(board, type) {
        let node = type === UnitType.red ? board.topNode : board.leftNode;
        return node.getAllNeighboursOfSameType().filter(n => n.winnerNode).length === 2;
    }

    switchTurn(turn) {
        if (turn === UnitType.red)
            return UnitType.blue;
        return UnitType.red;
    }

    shuffle(array) {
        let currentIndex = array.length;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            let temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    resetEmptySlots(board) {
        for (let hexagon of board.emptySlots) {
            hexagon.type = UnitType.empty;
        }
    }

    fillBoardRandomly(board, currentTurn) {
        let emptySlots = this.shuffle(board.emptySlots);
        for (let hexagon of emptySlots) {
            hexagon.type = currentTurn;
            currentTurn = this.switchTurn(currentTurn);
        }
    }

    evaluateBoard(board, currentTurn = UnitType.red, iterations = 250) {
        let wins = 0;

        for (let i = 0; i < iterations; i++) {
            // let newBoard = board.copy();
            this.fillBoardRandomly(board, currentTurn);
            let win = this.isWinner(board, currentTurn);
            this.resetEmptySlots(board);
            if (win)
                wins++;
        }
        return wins / iterations * 100;
    }

    createTree(board, currentTurn, depth = 2, parent = new AbNode()) {
        if (depth === 0)
            return parent;

        currentTurn = this.switchTurn(currentTurn);

        let possibleMoves = this.getPossibleMoves(board);

        for (let hexagon of possibleMoves) {
            let child = new AbNode();
            child.parent = parent;
            parent.children.push(child);
            child.hexagon = hexagon;

            board.setHex(hexagon, currentTurn);
            this.createTree(board, currentTurn, depth - 1, child);
            board.unsetHex(hexagon);
        }

        return parent;
    }

    getPossibleMoves(board) {
        const maxBranching = 10;

        let possibleMoves = board.emptySlots;
        if (possibleMoves.length <= maxBranching)
            return possibleMoves;

        // get relevant moves
        return possibleMoves;
    }

    alphaBeta(board, currentTurn, depth = 2, alpha = -Infinity, beta = Infinity) {
        if (depth === 0)
            return [this.evaluateBoard(board, currentTurn), false];

        let possibleMoves = this.getPossibleMoves(board);
        if (possibleMoves.length === 0)
            return [this.evaluateBoard(board, currentTurn), false];

        let best = [0, 0];;
        let opponent = this.switchTurn(currentTurn);
        for (let hexagon of possibleMoves) {
            board.setHex(hexagon, currentTurn);
            let [value, move] = this.alphaBeta(board, opponent, depth - 1, -alpha, -beta);
            board.unsetHex(hexagon);

            if (-value > alpha) {
                alpha = value;
                best = [value, hexagon];
            }
            if (alpha >= beta)
                return best;
        }
        return best;

        // if (maximizingPlayer) {
        //     let bestValue = -Infinity;
        //     let bestMove;
        //     for (let child of node.children) {
        //         board.setHex(child.hexagon, currentTurn);
        //         let [value, move] = this.alphaBeta(board, this.switchTurn(currentTurn), child, depth - 1, false, alpha, beta);
        //         board.unsetHex(child.hexagon);

        //         if (value > bestValue) {
        //             bestValue = value;
        //             bestMove = child.hexagon;
        //         }

        //         alpha = Math.max(alpha, bestValue);
        //         if (beta <= alpha)
        //             break; //(* beta cut-off *)
        //     }
        //     return [bestValue, bestMove];
        // } else {
        //     let bestValue = Infinity;
        //     let bestMove;
        //     for (let child of node.children) {
        //         board.setHex(child.hexagon, currentTurn);
        //         let [value, move] = this.alphaBeta(board, this.switchTurn(currentTurn), child, depth - 1, true, alpha, beta);
        //         board.unsetHex(child.hexagon);

        //         if (value < bestValue) {
        //             bestValue = value;
        //             bestMove = child.hexagon;
        //         }

        //         beta = Math.min(beta, bestValue);
        //         if (beta <= alpha)
        //             break; //(* alpha cut-off *)
        //     }
        //     return [bestValue, bestMove];
        // }
    }
}