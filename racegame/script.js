document.addEventListener('DOMContentLoaded', init, false);

function init() {
    let canvas = document.createElement('canvas');
    game = new Game(canvas);
    document.body.appendChild(canvas);
}
