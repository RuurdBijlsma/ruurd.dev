class Ayumu {
    constructor(canvas, width = 8, height = 5) {

        this.renderer = new Renderer(canvas);
        this.recreateGrid(width, height);

        this.clickWillStart = false;
        this.gameIsRunning = false;

        canvas.addEventListener('mousedown', e => {
            if (this.clickWillStart) {
                this.start();
                this.clickWillStart = false;
            }

            if (this.gameIsRunning) {
                let x = e.pageX - canvas.offsetLeft,
                    y = e.pageY - canvas.offsetTop;
                this.selectByPixel(x, y);
            }
        });

        this.rules = {
            startButtonEnabled: false, // [boolean] Use start button or start when clicking first number
            timeLimit: 0.5, // [false or a number] (seconds) Will automatically enable start button
            hideEveryGridSpace: false, // [boolean] Put a white square on every grid space, or only on the numbers
            numbers: 5, // [integer] How many numbers will be generated
            highestNumber: 9, // [integer] Highest possible number to be generated
            gridSizeWidth: 8,
            gridSizeHeight: 5,
        }

        this.reset();
    }

    recreateGrid(width, height) {
        this.grid = new Grid(width, height);
        this.renderer.attachGrid(this.grid);
    }

    reset() {
        this.recreateGrid(this.rules.gridSizeWidth, this.rules.gridSizeHeight)
        this.gameIsRunning = false;
        this.clickedNumbers = [];
        this.generatedNumbers = this.fillGrid(this.rules.numbers, this.rules.highestNumber);
        this.renderer.hideEveryGridSpace = this.rules.hideEveryGridSpace;

        if (this.rules.timeLimit > 0) {
            this.setAllVisible(false);
            this.rules.startButtonEnabled = true;
        }

        if (this.rules.startButtonEnabled) {
            document.querySelector(".start-button").style.display = 'block';
            this.clickWillStart = false;
        } else {
            document.querySelector(".start-button").style.display = 'none';
            this.clickWillStart = true;
        }
    }

    startButton() {
        document.querySelector(".start-button").style.display = 'none';
        this.start();
    }

    startTimer() {
        this.startTime = performance.now();
    }

    endTimer() {
        let endTime = performance.now();
        return Math.floor((endTime - this.startTime) / 10) / 100;
    }

    start() {
        let start = () => {
            this.gameIsRunning = true;
            this.startTimer();
            this.setAllVisible(false);
        }

        if (this.rules.timeLimit > 0) {
            this.setAllVisible(true);
            setTimeout(start, this.rules.timeLimit * 1000);
        } else start();
    }

    selectByPixel(pixelX, pixelY) {
        let [tileX, tileY] = this.renderer.getTileByPixel(pixelX, pixelY);

        let gridValue = this.grid.data[tileX][tileY];
        this.clickedNumbers.push(gridValue.value);
        if (gridValue.value !== -1 && this.clickedNumbers.toString() === this.generatedNumbers.slice(0, this.clickedNumbers.length).toString()) {//Well clicked
            if (this.clickedNumbers.length === this.generatedNumbers.length)
                this.endGame(true);// Win!
        } else this.endGame(false);// Game over
    }

    endGame(win) {
        let timeTaken = this.endTimer();
        this.setAllVisible();
        setTimeout(async () => {
            await swal(win ? 'Well Done' : 'Mistake', "Time taken: " + timeTaken + "s", win ? "success" : "error");

            this.reset();
        }, 100);
    }

    setAllVisible(visible = true) {
        this.grid.forEach(f => { if (f.value !== -1) f.visible = visible });
    }

    fillGrid(numbers = 3, highestNumber = 9) {

        if (numbers > this.grid.width * this.grid.height)
            return console.error('Too many numbers for this grid');

        if (numbers > highestNumber)
            return console.error("Numbers can not be higher than highest number");

        let generatedNumbers = [];
        for (let i = 0; i < numbers; i++) {
            let generated = Math.floor(Math.random() * highestNumber) + 1;
            if (generatedNumbers.includes(generated)) i--; else
                generatedNumbers.push(generated);
        }

        this.grid.reset();

        for (let i = 0; i < generatedNumbers.length; i++) {
            let randomX = Math.floor(Math.random() * this.grid.width),
                randomY = Math.floor(Math.random() * this.grid.height);

            let gridData = this.grid.data[randomX][randomY];
            if (gridData.value === -1) {
                gridData.value = generatedNumbers[i];
                gridData.visible = true;
            } else i--;
        }

        return generatedNumbers.sort((a, b) => a - b);
    }
}