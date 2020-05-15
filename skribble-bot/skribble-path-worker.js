import SkribbleBot from './SkribbleBot.js'

self.addEventListener('message', async e => {
    const { imageData } = e.data;

    let paths = await SkribbleBot.imageToPath(imageData);

    self.postMessage({ type: 'paths', paths });
});