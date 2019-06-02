class Map {
    constructor(size) {
        this.noise = new SimplexNoise();
        this.size = size;

        this.regions = [
            new TerrainType('Water Deep', 0.3, 0x254ad1),
            new TerrainType('Water Shallow', 0.4, 0x25a9d1),
            new TerrainType('Sand', 0.45, 0xf2f08c),
            new TerrainType('Grass', 0.55, 0x3caf2a),
            new TerrainType('Grass Dark', 0.6, 0x27721b),
            new TerrainType('Rock', 0.7, 0x725e50),
            new TerrainType('Rock Dark', 0.9, 0x4c3c31),
            new TerrainType('Snow', 1, 0xffffff),
        ];

        this.scale = 100; //Hoger is meer zoom in
        this.octaves = 6;
        this.persistance = 0.55;
        this.lacunarity = 2;
        this.borderSize = 50;
        this.posX = 0;
        this.posY = 0;
        this.geoHeight = 600 / this.size;
        this.squareBorder = false;

        let geoSize = 20;
        this.geometry = new THREE.PlaneGeometry(geoSize, geoSize, size - 1, size - 1);
        this.geometry.rotateX(-Math.PI / 2);

        this.mesh = new THREE.Mesh(this.geometry, new THREE.MeshStandardMaterial({
            color: 0xffffff
        }));
        this.updateTexture();
        this.updateGeometry();
    }

    regenerate() {
        this.updateTexture();
        this.updateGeometry();
        this.mesh.material.map = this.texture;
    }

    updateGeometry() {
        for (let i = 0; i < this.geometry.vertices.length; ++i) {
            let y = Math.floor(i / this.size);
            let x = i % this.size;

            let vertex = this.geometry.vertices[i];
            vertex.y = Math.max(this.noiseMap[i], this.regions.find(r => r.name == 'Water Shallow').height) * this.geoHeight;
        }

        this.geometry.computeVertexNormals();
        this.geometry.verticesNeedUpdate = true;
        this.geometry.elementsNeedUpdate = true;
        this.geometry.morphTargetsNeedUpdate = true;
        this.geometry.uvsNeedUpdate = true;
        this.geometry.normalsNeedUpdate = true;
        this.geometry.colorsNeedUpdate = true;
        this.geometry.tangentsNeedUpdate = true;
    }

    updateTexture() {
        this.noiseMap = this.generateMap(this.scale, this.borderSize, this.squareBorder, this.octaves, this.persistance, this.lacunarity, {
            x: this.posX,
            y: this.posY
        });

        if(!this.map)
            this.map = new Uint8Array(this.noiseMap.length * 3);

        for (let i = 0; i < this.noiseMap.length; i++) {
            let currentHeight = this.noiseMap[i];
            for (let region of this.regions) {
                if (currentHeight <= region.height) {
                    this.map[i * 3] = region.color.r;
                    this.map[i * 3 + 1] = region.color.g;
                    this.map[i * 3 + 2] = region.color.b;
                    break;
                }
            }
        }

        this.noiseMap = this.rotateMap(this.noiseMap, this.size);
        this.texture = this.toTexture();
    }

    rotateMap(map, size) {
        let newMap = [];

        for (let i = 0; i < size * size; ++i) {
            let x = Math.floor(i / size);
            let y = i % size;

            newMap[i] = map[(size - x - 1) * size + y];
        }

        return newMap;
    }

    toTexture() {
        let tex = new THREE.DataTexture(this.map, this.size, this.size, THREE.RGBFormat);
        tex.needsUpdate = true;
        return tex;
    }

    random(start, end) {
        return end - Math.random() * (end - start);
    }

    generateMap(scale, borderSize, squareBorder, octaves, persistance, lacunarity, position) {
        //fill map
        let arraySize = this.size * this.size;
        let map = new Array(arraySize);
        let octaveOffsets = [];
        for (let i = 0; i < octaves; i++) {
            let offsetX = this.random(0, 0);
            let offsetY = this.random(0, 0);
            octaveOffsets[i] = new THREE.Vector2(offsetX, offsetY);
        }
        let center = new THREE.Vector2(this.size / 2, this.size / 2);
        let halfSize = Math.min(this.size, this.size) / 2;

        for (let x = 0; x < this.size; ++x) {
            for (let y = 0; y < this.size; ++y) {
                let amplitude = 1;
                let frequency = 1;
                let noiseHeight = 0;
                let heightModifier, amplitudeModifier;
                if (squareBorder) {
                    amplitudeModifier = Math.min(x, y, this.size - x, this.size - y, borderSize) / borderSize;
                    heightModifier = Math.min(x, y, this.size - x, this.size - y, (borderSize / 2)) / (borderSize / 2);
                } else {
                    let distanceToCenter = center.distanceTo(new THREE.Vector2(x, y));
                    let distanceToBorder = Math.max(0, halfSize - distanceToCenter);
                    heightModifier = Math.min(distanceToBorder, borderSize) / borderSize;
                    amplitudeModifier = Math.min(distanceToBorder, borderSize / 2) / (borderSize / 2);
                }

                for (let i = 0; i < octaves; i++) {
                    let mapX = (x - center.x) / scale * frequency + octaveOffsets[i].x + position.x;
                    let mapY = (y - center.y) / scale * frequency + octaveOffsets[i].y + position.y;
                    let value = (this.noise.noise2D(mapX, mapY) + 1) / 2;
                    noiseHeight += value * amplitude * heightModifier;

                    amplitude *= persistance * amplitudeModifier;
                    frequency *= lacunarity;
                }


                let index = (y * this.size + x);
                map[index] = noiseHeight;
            }
        }

        let lowest = Infinity,
            highest = -Infinity,
            highestAllowedValue = 1;
        for (let i = 0; i < map.length; i++) {
            if (map[i] < lowest) {
                lowest = map[i];
            }
            if (map[i] > highest) {
                highest = map[i];
            }
        }
        let multiplier = highestAllowedValue / (highest - lowest);
        console.log(lowest, highest, multiplier);
        for (let i = 0; i < map.length; i++) {
            map[i] -= lowest;
            map[i] *= multiplier;
        }

        return map;
    }
}