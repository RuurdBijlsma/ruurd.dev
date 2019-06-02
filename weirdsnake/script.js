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

function init() {
    canvas = document.createElement('canvas');
    context = canvas.getContext('2d');
    document.body.appendChild(canvas);

    width = 64;
    height = 36;

    resetWindow();
    window.addEventListener('resize', resetWindow);

    spawnSnake();
    spawnFood();

    draw();

    let tps = 5;
    currentDirection = randomDirection();
    self.setInterval(() => tick(), 1000 / tps);

    actionQueue = [];

    document.addEventListener('keydown', e => {
        switch (e.key) {
            case "ArrowUp":
                actionQueue.push(() => {
                    currentDirection = directions.up;
                });
                break;
            case "ArrowDown":
                actionQueue.push(() => {
                    currentDirection = directions.down;
                });
                break;
            case "ArrowLeft":
                actionQueue.push(() => {
                    currentDirection = directions.left;
                });
                break;
            case "ArrowRight":
                actionQueue.push(() => {
                    currentDirection = directions.right;
                });
                break;
        }
    });
}

function tick() {
    if (actionQueue.length > 0)
        actionQueue.splice(0, 1)[0]();
}

function randomPosition() {
    let x = Math.floor(width * Math.random());
    let y = Math.floor(height * Math.random());
    return [x, y];
}

function spawnSnake() {
    let [x, y] = randomPosition();
    snake = [[x, y]];
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
    context.fillStyle = color;
    context.fillRect(pos[0] * pWidth, pos[1] * pHeight, pWidth, pHeight);
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawAtPos(foodPos, 'green');
    for(let part of snake)
        drawAtPos(part, 'red');

    requestAnimationFrame(draw);
}