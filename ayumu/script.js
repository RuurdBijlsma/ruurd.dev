document.addEventListener('DOMContentLoaded', init);
function init() {
    ayumu = new Ayumu(document.querySelector('.board'));

    gui = new dat.GUI();
    gui.add(ayumu.rules, 'timeLimit').min(0).max(10).step(0.1).onChange(() => ayumu.reset());
    gui.add(ayumu.rules, 'startButtonEnabled').onChange(() => ayumu.reset());
    gui.add(ayumu.rules, 'hideEveryGridSpace').onChange(() => ayumu.reset());
    gui.add(ayumu.rules, 'numbers').min(2).max(15).step(1).onChange(() => ayumu.reset());
    gui.add(ayumu.rules, 'highestNumber').min(2).max(100).step(1).onChange(() => ayumu.reset());
    gui.add(ayumu.rules, 'gridSizeWidth').min(2).max(30).step(1).onChange(() => ayumu.reset());
    gui.add(ayumu.rules, 'gridSizeHeight').min(2).max(30).step(1).onChange(() => ayumu.reset());

}

