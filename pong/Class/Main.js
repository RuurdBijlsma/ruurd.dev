class Main {
    constructor(renderElement) {
        this.canvas = renderElement;
        this.context = renderElement.getContext('2d');
        this.loop = new GameLoop();
        this.keyHandler = new KeyHandler(this.loop);

        this.mouseControls = false;
        this.mouseControlsX = false;

        setTimeout(() => this.game.paddles.left.AIControlled = true, 100);

        this.setKeys();
        this.setMouse();
        this.setMobile();
    }

    setMouse() {
        document.addEventListener('mousemove', e => {
            let offset = MAIN.canvas.getBoundingClientRect(),
                x = e.pageX - offset.left,
                y = e.pageY - offset.top;
            let playerPaddle = MAIN.game.paddles.right;

            if (MAIN.mouseControls)
                playerPaddle.position.set(MAIN.mouseControlsX ? x - playerPaddle.width / 2 : playerPaddle.position.x, y - playerPaddle.height / 2);
        });
    }

    setMobile() {
        document.addEventListener('touchmove', e => {
            let offset = MAIN.canvas.getBoundingClientRect(),
                x = e.touches[0].pageX - offset.left,
                y = e.touches[0].pageY - offset.top;
            let playerPaddle = MAIN.game.paddles.right;

            playerPaddle.position.set(MAIN.mouseControlsX ? x - playerPaddle.width / 2 : playerPaddle.position.x, y - playerPaddle.height / 2);
        });
    }

    setKeys() {
        let keyMoveSpeed = 5;
        this.keyHandler.setContinuousKey('ArrowUp', 'Right paddle up', [() => this.game.paddles.right.move(-keyMoveSpeed)]);
        this.keyHandler.setContinuousKey('ArrowDown', 'Right paddle down', [() => this.game.paddles.right.move(keyMoveSpeed)]);
        this.keyHandler.setContinuousKey('w', 'Left paddle up', [() => this.game.paddles.left.move(-keyMoveSpeed)]);
        this.keyHandler.setContinuousKey('s', 'Left paddle down', [() => this.game.paddles.left.move(keyMoveSpeed)]);

        this.keyHandler.setContinuousKey('-', 'Decrease play height', [() => this.game.playHeight -= 2]);
        this.keyHandler.setContinuousKey('+', 'Increase play height', [() => this.game.playHeight += 2]);

        this.keyHandler.setSingleKey('r', 'Reset ball', [() => this.game.ball.reset()]);
        this.keyHandler.setSingleKey('m', 'Toggle mouse controls', [() => MAIN.mouseControls = !MAIN.mouseControls]);
        this.keyHandler.setSingleKey('x', 'Toggle mouse x control', [() => MAIN.mouseControlsX = !MAIN.mouseControlsX]);
        this.keyHandler.setSingleKey('c', 'Toggle AI control', [() => MAIN.game.paddles.left.AIControlled = !MAIN.game.paddles.left.AIControlled]);

        this.keyHandler.setSingleKey('1', 'Set AI Difficulty to 1', [() => MAIN.game.paddles.left.AI.difficulty = 1]);
        this.keyHandler.setSingleKey('2', 'Set AI Difficulty to 2', [() => MAIN.game.paddles.left.AI.difficulty = 2]);
        this.keyHandler.setSingleKey('3', 'Set AI Difficulty to 3', [() => MAIN.game.paddles.left.AI.difficulty = 3]);
        this.keyHandler.setSingleKey('4', 'Set AI Difficulty to 4', [() => MAIN.game.paddles.left.AI.difficulty = 4]);
        this.keyHandler.setSingleKey('5', 'Set AI Difficulty to 5', [() => MAIN.game.paddles.left.AI.difficulty = 5]);
        this.keyHandler.setSingleKey('6', 'Set AI Difficulty to 6', [() => MAIN.game.paddles.left.AI.difficulty = 6]);
        this.keyHandler.setSingleKey('7', 'Set AI Difficulty to 7', [() => MAIN.game.paddles.left.AI.difficulty = 7]);
        this.keyHandler.setSingleKey('8', 'Set AI Difficulty to 8', [() => MAIN.game.paddles.left.AI.difficulty = 8]);
        this.keyHandler.setSingleKey('9', 'Set AI Difficulty to 9', [() => MAIN.game.paddles.left.AI.difficulty = 9]);
        this.keyHandler.setSingleKey('0', 'Set AI Difficulty to 0', [() => MAIN.game.paddles.left.AI.difficulty = 50]);
    }

    render() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let rectangle of this.game.rectangles)
            rectangle.draw(this.context);

        this.game.ball.draw(this.context);

        this.context.font = '30px consolas';
        let text = `${this.game.paddles.left.score} - ${this.game.paddles.right.score}`,
            width = this.context.measureText(text).width;
        this.context.fillText(text, MAIN.canvas.width / 2 - width / 2, 50);

        requestAnimationFrame(() => this.render());
    }

    startGame() {
        this.game = new Game();

        this.render();
    }

    msg(text) {
        let elm = document.getElementById('msg');
        elm.innerText = text;
        if (this.timeout)
            clearTimeout(this.timeout);
        this.timeout = setTimeout(() => elm.innerText = '', text.length * 50 + 3000);
    }
}
