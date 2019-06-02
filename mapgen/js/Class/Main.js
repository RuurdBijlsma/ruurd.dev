class Main {
    constructor() {
        this.onstart = () => {};
        this.loop = new GameLoop(120);
        this.view = new View(document.getElementById('renderElement'), this);
        this.input = new Input(this.loop);
        this.setKeyMap();
    }

    setGUIs() {
        if (this.sliders)
            this.sliders.destroy();
        let map = this.game.map;
        this.sliders = new dat.GUI();

        this.sliders.add(this.game, 'size', 10, 1000).step(10);
        this.sliders.add(map, 'geoHeight', 0, 20).onChange(() => this.redoMap());
        this.sliders.add(map, 'scale', 0.0001, 1000).onChange(() => this.redoMap());
        this.sliders.add(map, 'octaves', 0, 10).step(1).onChange(() => this.redoMap());
        this.sliders.add(map, 'persistance', 0, 1).onChange(() => this.redoMap());
        this.sliders.add(map, 'lacunarity', 0, 2).onChange(() => this.redoMap());
        this.sliders.add(map, 'posX', -1, 1).onChange(() => this.redoMap());
        this.sliders.add(map, 'posY', -1, 1).onChange(() => this.redoMap());
        this.sliders.add(map, 'borderSize', 0, map.size).onChange(() => this.redoMap());
        this.sliders.add(map, 'squareBorder').onChange(() => this.redoMap());
        this.sliders.add(map, 'regenerate').onChange(() => this.newMap());
    }

    setKeyMap() {
        this.input.keyboard.setSingleKey('r', 'Regen map', () => this.newMap());
    }

    newMap() {
        this.game.newMap();
        this.setGUIs();
    }

    redoMap() {
        this.game.map.regenerate();
    }

    startGame() {
        this.game = new Game();
        this.setGUIs();
        this.onstart();
    }
}