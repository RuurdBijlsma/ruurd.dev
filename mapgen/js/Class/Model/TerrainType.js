class TerrainType {
    constructor(name, height, color) {
        this.name = name;
        this.height = height;
        let c = new THREE.Color(color);
        this.color = {
            r: c.r * 255,
            g: c.g * 255,
            b: c.b * 255
        };
    }
}
