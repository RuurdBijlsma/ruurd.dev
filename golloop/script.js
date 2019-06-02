document.addEventListener('DOMContentLoaded', init);

async function init(){
    canvas = document.createElement('canvas');
    game = new Game(canvas);
    document.body.appendChild(canvas);
}