document.addEventListener('DOMContentLoaded', init, false);


let canvas = null;
let context = null;

let startTileCount = 2;
let gridX = 4;
let gridY = 4;
let lx = gridX - 1;
let ly = gridY - 1;
let hasWon = false;

let grid = [];
let startX, startY;

function init() {
    canvas = document.querySelector('.canvas');
    console.log(canvas);
    canvas.width = 500;
    canvas.height = 500;
    context = canvas.getContext('2d');

    for (let x = 0; x < gridX; x++) {
        let row = [];
        for (let y = 0; y < gridY; y++) {
            row.push(0);
        }
        grid.push(row);
    }
    for(let i = 0; i < startTileCount; i++) {
        spawn();
    }

    document.addEventListener('keyup', listenKey, false);
    document.addEventListener('touchstart', e => {
        console.log(e);
        startX = e.touches[0].pageX;
        startY = e.touches[0].pageY;
    }, false);
    document.addEventListener('touchend', e => handleGesure(e.changedTouches[0].pageX, e.changedTouches[0].pageY), false);

    function handleGesure(endX, endY) {
        let x = startX - endX
        let y = startY - endY;
        if (Math.abs(x) > Math.abs(y)) {
            // horizontal swipe
            if (x > 30)
                swipe(Direction.left);
            if (x < -30)
                swipe(Direction.right);
        } else {
            // vertical swipe
            if (y > 30)
                swipe(Direction.up);
            if (y < -30)
                swipe(Direction.down);
        }
    }
    render();
}

const Direction = {
    up: 0,
    left: 1,
    down: 2,
    right: 3,
}

function listenKey(e) {
    switch (e.key) {
        case "ArrowUp":
            swipe(Direction.up);
            break;
        case "ArrowLeft":
            swipe(Direction.left);
            break;
        case "ArrowDown":
            swipe(Direction.down);
            break;
        case "ArrowRight":
            swipe(Direction.right);
            break;
    }
}

function getCell(x, y, rotation) {
    switch (rotation) {
        case Direction.up: return grid[x][y];
        case Direction.left: return grid[y][lx - x];
        case Direction.down: return grid[lx - x][ly - y];
        case Direction.right: return grid[ly - y][lx - x];
    }
}

function setCell(x, y, value, rotation) {
    switch (rotation) {
        case Direction.up:
            grid[x][y] = value;
            break;
        case Direction.left:
            grid[y][lx - x] = value;
            break;
        case Direction.down:
            grid[lx - x][ly - y] = value;
            break;
        case Direction.right:
            grid[ly - y][lx - x] = value;
            break;
    }
}

function swipe(direction) {
    let changed = false;

    for (let x = 0; x < gridX; x++) {
        let changePossible = false;
        let values = [];
        outer:
        for (let y = 0; y < gridY; y++) {
            let value = getCell(x, y, direction);
            for (let y2 = y + 1; y2 < gridY; y2++) {
                let nextValue = getCell(x, y2, direction);
                if (nextValue === 0) continue;
                if (nextValue === value) {
                    setCell(x, y2, 0, direction);
                    changed = true;
                    values.push(value * 2);
                    if (value * 2 === 2048 && !hasWon) {
                        alert("YOU ARE WINNER");
                        hasWon = true;
                    }
                    y = y2;
                    continue outer;
                }
                break;
            }
            if (value !== 0) {
                values.push(value);
                if (changePossible) changed = true;
            }
            if (value === 0) changePossible = true;
        }
        for (let y = 0; y < gridY; y++)
            setCell(x, y, y < values.length ? values[y] : 0, direction);
    }

    if (changed) spawn();
}

function spawn() {
    let emptyTiles = [];
    for (let x = 0; x < gridX; x++) {
        for (let y = 0; y < gridY; y++) {
            if (grid[x][y] === 0) {
                emptyTiles.push([x, y]);
            }
        }
    }
    let randomTile = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
    grid[randomTile[0]][randomTile[1]] = Math.random() < 0.3 ? 4 : 2;
}

function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(render);
    renderNumbers();
    renderGrid();
}

function renderNumbers() {
    const colors = {
        '2': 'orange',
        '4': 'red',
        '8': 'brown',
        '16': 'green',
        '32': 'cyan',
        '64': 'skyblue',
        '128': 'blue',
        '256': 'magenta',
        '512': 'purple',
        '1024': 'blueviolet',
        '2048': 'crimson',
    }
    let cellWidth = canvas.width / gridX;
    let cellHeight = canvas.height / gridY;
    context.font = "bold 50px arial";
    for (let x = 0; x < gridX; x++) {
        for (let y = 0; y < gridY; y++) {
            let text = grid[x][y].toString();
            if (text == '0') continue;
            context.fillStyle = colors[text];
            context.fillRect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
            let textWidth = context.measureText(text).width;
            context.fillStyle = 'white';
            context.fillText(
                text,
                x * cellWidth + cellWidth / 2 - textWidth / 2,
                (y + 1) * cellHeight + 15 - cellHeight / 2
            );

        }
    }
}

function renderGrid() {
    context.strokeStyle = 'black';
    context.beginPath();
    for (let i = 1; i < gridX; i++) {
        context.moveTo(i * (canvas.width / gridX), 0);
        context.lineTo(i * (canvas.width / gridX), canvas.height);
        context.stroke();
    }
    for (let i = 1; i < gridY; i++) {
        context.moveTo(0, i * (canvas.height / gridY));
        context.lineTo(canvas.width, i * (canvas.height / gridY));
        context.stroke();
    }
}
