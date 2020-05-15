import SkribbleBot from './SkribbleBot.js'

self.addEventListener('message', async e => {
    const { imageData, colours, brushes } = e.data;

    let { background, paths } = await SkribbleBot.imageToColours(imageData, colours, brushes,
        async background => {
            self.postMessage({ type: 'background', background });
        },
        async path => {
            self.postMessage({ type: 'path', path });
        });
    self.postMessage({ type: 'finished', background, paths });
});