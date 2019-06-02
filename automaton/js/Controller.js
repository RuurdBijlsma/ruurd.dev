/**
 * Manages the user interface for a simulation.
 */
class Controller {
    constructor(automaton) {
        this.automaton = automaton;
        let canvas = automaton.igloo.canvas;
        this.drag = null;
        canvas.addEventListener('mousedown',  e => {
            this.drag = e.which;
            let pos = automaton.eventCoord(e);
            automaton.poke(pos[0], pos[1], this.drag == 1);
        });
        document.addEventListener('mouseup', () => {
            this.drag = null;
        });
        canvas.addEventListener('mousemove',  e => {
            if (this.drag) {
                let pos = automaton.eventCoord(e);
                automaton.poke(pos[0], pos[1], this.drag == 1);
            }
        });
        canvas.addEventListener('touchstart',  e => {
            this.drag = true;
            let pos = automaton.eventCoord(e.touches[0]);
            automaton.poke(pos[0], pos[1], this.drag == 1);
        });
        document.addEventListener('touchend', () => {
            this.drag = null;
        });
        canvas.addEventListener('touchmove',  e => {
            if (this.drag) {
                let pos = automaton.eventCoord(e.touches[0]);
                automaton.poke(pos[0], pos[1], this.drag);
            }
        });
        canvas.addEventListener('contextmenu',  e => {
            e.preventDefault();
            return false;
        });
        document.addEventListener('keyup',  e =>{
            switch (e.which) {
                case 82: /* r */
                    automaton.setRandom();
                    break;
                case 46: /* [delete] */
                    automaton.setEmpty();
                    break;
                case 32: /* [space] */
                    automaton.toggle();
                    break;
                case 83: /* s */
                    if (e.shiftKey) {
                        if (this._save) automaton.set(this._save);
                    } else {
                        this._save = automaton.get();
                    }
                    break;
            };
        });
    }
}