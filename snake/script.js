document.addEventListener("DOMContentLoaded", init, false);

tiles = {
    empty: 0,
    snake: 1,
    food: 2,
}

directions = {
    up: [0, -1],
    down: [0, 1],
    left: [-1, 0],
    right: [1, 0],
}

opposites = {};
opposites[directions.up] = directions.down;
opposites[directions.down] = directions.up;
opposites[directions.left] = directions.right;
opposites[directions.right] = directions.left;

function randomDirection() {
    let rand = Math.random();
    if (rand <= 0.25)
        return directions.up;
    if (rand <= 0.5)
        return directions.down;
    if (rand <= 0.75)
        return directions.left;
    return directions.right;
}

function resetGame() {
    if (typeof gameTicker !== 'undefined')
        clearInterval(gameTicker);
    spawnSnake();
    spawnFood();

    draw();

    let tps = 9;
    gameTicker = self.setInterval(() => tick(), 1000 / tps);

    actionQueue = [];
}

function init() {
    canvas = document.createElement('canvas');
    context = canvas.getContext('2d');
    document.body.appendChild(canvas);

    width = 64;
    height = window.innerHeight / window.innerWidth * width;

    resetWindow();
    window.addEventListener('resize', resetWindow);

    resetGame();

    document.addEventListener('keydown', e => {
        switch (e.key) {
            case "ArrowUp":
                actionQueue.push(() => {
                    if (opposites[currentDirection] != directions.up)
                        currentDirection = directions.up;
                });
                break;
            case "ArrowDown":
                actionQueue.push(() => {
                    if (opposites[currentDirection] != directions.down)
                        currentDirection = directions.down;
                });
                break;
            case "ArrowLeft":
                actionQueue.push(() => {
                    if (opposites[currentDirection] != directions.left)
                        currentDirection = directions.left;
                });
                break;
            case "ArrowRight":
                actionQueue.push(() => {
                    if (opposites[currentDirection] != directions.right)
                        currentDirection = directions.right;
                });
                break;
        }
    });
}

function tick() {
    let head = clone(snake[0]);
    let foodFound = head[0] === foodPos[0] && head[1] === foodPos[1];

    for (let part of snake.slice(1))
        if (head[0] === part[0] && head[1] === part[1])
            return die();
    if (!isInBounds(head))
        return die();

    if (actionQueue.length > 0)
        actionQueue.splice(0, 1)[0]();

    if (foodFound) {
        snake.slice(snake.length - 1, 1)[0];
        spawnFood();
    }
    else
        snake.splice(snake.length - 1, 1)[0];

    head[0] += currentDirection[0];
    head[1] += currentDirection[1];

    snake.unshift(head);
}

function isInBounds(position) {
    return position[0] >= 0 && position[0] < width && position[1] >= 0 && position[1] < height;
}

function die() {
    console.log("You died");

    resetGame();
}

function randomPosition() {
    let x = Math.floor(width * Math.random());
    let y = Math.floor(height * Math.random());
    return [x, y];
}

function spawnSnake() {
    currentDirection = randomDirection();
    let [x, y] = randomPosition();
    let [x1, y1] = currentDirection;
    snake = [[x, y], [x + x1, y + y1]];
}

function spawnFood() {
    let x, y;
    do {
        [x, y] = randomPosition();
    } while (false);

    foodPos = [x, y];
}

function resetWindow() {
    pWidth = window.innerWidth / width;
    pHeight = window.innerHeight / height;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function drawAtPos(pos, color = 'magenta') {
    let padding = 4;
    context.fillStyle = color;
    context.fillRect(pos[0] * pWidth + padding / 2, pos[1] * pHeight + padding / 2, pWidth - padding, pHeight - padding);
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawAtPos(foodPos, 'green');
    for (let part of snake)
        drawAtPos(part, 'red');

    requestAnimationFrame(draw);
}

function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}