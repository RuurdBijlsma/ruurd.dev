// Code to call this: 

// javascript:(function(){var script=document.createElement('script');script.type='module';script.src='//ruurd.dev/skribble-bot/bookmark.js';document.head.appendChild(script);})()

import SkribbleBot from './SkribbleBot.js'
import SkribbleDraw from './SkribbleDraw.js'
import hamburger from './hamburger.js';

init();

async function init() {
    console.log("[HACKS INITIALIZED] Skribble hacks loaded [10/10][OPTIMIZED]");

    console.log(SkribbleBot, SkribbleDraw);
    let canvas = document.querySelector('#canvasGame');
    let rect = canvas.getBoundingClientRect();

    let pixels = 70000;
    SkribbleBot.baseUrl = 'https://ruurd.dev/skribble-bot/';
    console.log(SkribbleBot.baseUrl);
    let image = await SkribbleBot.getImageFromUrl(hamburger);
    let ratio = image.height / image.width;
    let width = Math.round(Math.sqrt(pixels / ratio));
    let height = Math.round(width * ratio);
    let imageData = await SkribbleBot.getImageData(image, width, height);

    let scale = Math.min(rect.width / width, rect.height / height);
    SkribbleDraw.setScale(scale);

    let worker = new Worker(SkribbleBot.baseUrl + 'skribble-colour-worker.js', { type: 'module' });
    let pathWorker = new Worker(SkribbleBot.baseUrl + 'skribble-path-worker.js', { type: 'module' });

    let commands = [];
    worker.addEventListener('message', ({ data }) => {
        switch (data.type) {
            case 'background':
                commands.push(async () => await SkribbleDraw.fill(data.background));
                break;
            case 'path':
                let { brush, colour, path } = data.path;
                commands.push(async () => await SkribbleDraw.selectPen());
                commands.push(async () => await SkribbleDraw.setBrushSize(brush));
                commands.push(async () => await SkribbleDraw.setColour(colour));
                commands.push(async () => await SkribbleDraw.moveBrush(path));
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
                commands.push(async () => await SkribbleDraw.setBrushSize(1));
                commands.push(async () => await SkribbleDraw.setColour([0, 0, 0]));
                console.log(data.paths);
                for (let path of data.paths)
                    commands.push(async () => await SkribbleDraw.moveBrush(path));
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
        colours: SkribbleDraw.colours,
        brushes: SkribbleDraw.brushes,
        imageData,
    });

}