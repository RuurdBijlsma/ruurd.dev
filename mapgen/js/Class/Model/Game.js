class Game {
    constructor() {
        this.loop = MAIN.loop.add(() => this.tick());

        this.size = 200;
        this.newMap();
    }

    newMap() {
        for (let i = MAIN.view.children.length - 1; i >= 0; i--) 
            if (MAIN.view.children[i].type === "Mesh")
                MAIN.view.remove(MAIN.view.children[i]);

        this.map = new Map(this.size, this.size);
        this.mesh = this.map.mesh;
        MAIN.view.add(this.mesh);
        this.mesh.material.map = this.map.texture;
    }

    tick() {

    }
}