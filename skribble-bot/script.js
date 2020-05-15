import SkribbleBot from './SkribbleBot.js'
import CustomDraw from './CustomDraw.js'
// import cachedPaths from './cachedPaths.js';
import hamburger from './hamburger.js';
// let {background, paths, linePaths} = cachedPaths;

document.addEventListener('DOMContentLoaded', init, false);

// TODO:
// binarized image to path
// calculate colours for every (grid/circle) space transform those to preset colors
// colors first, lines later?
// combine stuff to make drawing machine
// make class to interface with canvas
// selectColor(color)
// presetColors = ['#ff0000', '#ffffff']
// setBrushSize(size)
// availableBrushSizes = [1, 5, 10]
// moveBrush(path = [[0,0], [0,1], [0,0]])
// google images integration
// When it's not guessed, go with different google image
// skribble integration

async function init() {
    let canvas = document.querySelector('.path-debug');
    canvas.width = 600;
    canvas.height = 600;
    canvas.style.width = canvas.width + 'px';
    canvas.style.height = canvas.height + 'px';
    CustomDraw.setCanvas(canvas);
    let pixels = 80000;
    let image = await SkribbleBot.getImageFromUrl(hamburger);
    let ratio = image.height / image.width;
    let width = Math.round(Math.sqrt(pixels / ratio));
    let height = Math.round(width * ratio);
    let imageData = await SkribbleBot.getImageData(image, width, height);

    let scale = Math.min(canvas.width / width, canvas.height / height);
    CustomDraw.setScale(scale);

    let worker = new Worker('skribble-colour-worker.js', { type: 'module' });
    let pathWorker = new Worker('skribble-path-worker.js', { type: 'module' });

    let commands = [];
    worker.addEventListener('message', ({ data }) => {
        switch (data.type) {
            case 'background':
                commands.push(async () => await CustomDraw.fill(data.background));
                break;
            case 'path':
                let { brush, colour, path } = data.path;
                commands.push(async () => await CustomDraw.setBrushSize(brush));
                commands.push(async () => await CustomDraw.setColour(colour));
                commands.push(async () => await CustomDraw.moveBrush(path));
                break;
            case 'finished':
                pathWorker.postMessage({
                    imageData,
                });

        }
    }, false);
    pathWorker.addEventListener('message', ({ data }) => {
        switch (data.type) {
            case 'paths':
                commands.push(async () => await CustomDraw.setBrushSize(1));
                commands.push(async () => await CustomDraw.setColour([0, 0, 0]));
                console.log(data.paths);
                for (let path of data.paths)
                    commands.push(async () => await CustomDraw.moveBrush(path));
                break;
        }
    }, false);

    let workOnQueue;
    workOnQueue = async () => {
        while (commands.length > 0) {
            let command = commands.splice(0, 1)[0];
            await command();
        }

        setTimeout(workOnQueue, 100);
    }
    workOnQueue();


    worker.postMessage({
        colours: CustomDraw.colours,
        brushes: CustomDraw.brushes,
        imageData,
    });
}

async function debugSync() {

    let canvas = document.querySelector('.path-debug');
    canvas.width = 500;
    canvas.height = 500;
    canvas.style.width = canvas.width + 'px';
    canvas.style.height = canvas.height + 'px';


    let bot = new SkribbleBot();
    CustomDraw.setCanvas(canvas);

    let width = 500;
    let img = await bot.getImageDataFromUrl('img/panflute.jpg');
    let height = Math.round(width / img.width * img.height);

    let commands = [];

    await bot.imageToColours(img, width, height, CustomDraw.colours, CustomDraw.brushes,
        async background => {
            console.log("Background set!");
            commands.push(async () => await CustomDraw.fill(background));
        },
        async ({ path, brush, colour }) => {
            console.log({ path, brush, colour });
            //Brush variable is radius
            commands.push(async () => await CustomDraw.setBrushSize(brush));
            commands.push(async () => await CustomDraw.setColour(colour));
            commands.push(async () => await CustomDraw.moveBrush(path));
        });

    let linePaths = await bot.imageToPath(img, width, height);

    commands.push(async () => await CustomDraw.setBrushSize(1));
    commands.push(async () => await CustomDraw.setColour([0, 0, 0]));
    for (let path of linePaths) {
        // commands.push(async () => await CustomDraw.moveBrush(path));
    }

    console.log(commands);

    for (let command of commands) {
        await command();
    }
}


async function debug() {
    let pathCanvas = document.querySelector('.path-debug');
    pathCanvas.style.width = window.innerWidth + 'px';
    pathCanvas.style.height = window.innerWidth + 'px';
    let colourCanvas = document.querySelector('.colour-debug');
    colourCanvas.style.width = window.innerWidth + 'px';
    colourCanvas.style.height = window.innerWidth + 'px';
    let originalCanvas = document.querySelector('.original-debug');
    originalCanvas.style.width = window.innerWidth + 'px';
    originalCanvas.style.height = window.innerWidth + 'px';

    console.log(SkribbleBot, CustomDraw);

    let width = 150;
    let image = await SkribbleBot.getImageFromUrl('img/me2.jpg');
    let imageData = await SkribbleBot.getImageData(image, width, width);
    let height = Math.round(width / imageData.width * imageData.height);
    console.log({ width, height })

    originalCanvas.width = width;
    originalCanvas.height = height;
    originalCanvas.getContext('2d').putImageData(imageData, 0, 0)
    let linePaths = await SkribbleBot.imageToPath(imageData, pathCanvas);

    let context = pathCanvas.getContext('2d');
    let { background, paths } = await SkribbleBot.imageToColours(imageData, CustomDraw.colours, CustomDraw.brushes,
        background => console.log({ background }), path => console.log(path), colourCanvas);
    console.log({ background, paths });

    context.fillStyle = `rgb(${background[0]},${background[1]},${background[2]})`;
    context.fillRect(0, 0, width, height);

    for (let { path, colour, brush } of paths) {
        // console.log({ colour, length: path.length, brushSize: brush });
        await SkribbleBot.drawPath(context, path, brush * 2, `rgb(${colour[0]},${colour[1]},${colour[2]})`);
    }

    for (let path of linePaths) {
        await SkribbleBot.drawPath(context, path, 1, 'black', 5);
        await SkribbleBot.waitSleep(Math.random() * 100);
    }
}