/* Initialize everything. */
var automaton = null, controller = null;
document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById('life');
    automaton = new Automaton(canvas, 1);
    automaton.start();
    automaton.setSize(window.innerWidth, window.innerHeight);
    automaton.setRandom();

    controller = new Controller(automaton);
});

window.addEventListener('resize', () => {
    if (automaton.shouldChangeSize(window.innerWidth, window.innerHeight))
        automaton.setSize(window.innerWidth, window.innerHeight);
});

/* Don't scroll on spacebar. */
window.addEventListener('keydown', e => { if (e.key === ' ') e.preventDefault() });

time = (fun, n = 100) => {
    let now = performance.now();

    for (let i = 0; i < n; i++)
        fun();

    let elapsed = performance.now() - now;
    console.log(elapsed / n);
}