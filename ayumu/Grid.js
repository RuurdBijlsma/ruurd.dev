class Grid {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.reset();
    }

    forEach(fun) {
        this.data.forEach(r => r.forEach(f => fun(f)));
    }

    reset() {
        this.data = [];

        for (let x = 0; x < this.width; x++) {
            this.data[x] = [];
            for (let y = 0; y < this.height; y++) {
                this.data[x][y] = { value: -1, visible: false };
            }
        }
    }
}