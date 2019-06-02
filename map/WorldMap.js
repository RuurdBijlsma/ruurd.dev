class WorldMap {
    constructor(data, rotationX = 0, rotationY = 0, mouseInteractivity = true) {
        this.data = data;
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.projection = d3.geo.orthographic()
            .scale(250)
            .translate([this.width / 2, this.height / 2])
            .clipAngle(90)
            .precision(.1);

        this.rotation = {
            x: rotationX,
            y: rotationY
        };

        this.mouse = {
            down: false,
            startPos: {
                x: 0,
                y: 0
            }
        }

        if (mouseInteractivity) {
            document.addEventListener('mousedown', e => {
                this.mouse.down = true;
                this.mouse.prevPos = {
                    x: e.pageX,
                    y: e.pageY
                };
            });
            document.addEventListener('mousemove', e => {
                if (this.mouse.down) {
                    let x = e.pageX,
                        y = e.pageY;
                    this.translate = {
                        x: x - this.mouse.prevPos.x,
                        y: (y - this.mouse.prevPos.y) * -1
                    }
                    this.mouse.prevPos = { x: x, y: y };
                    this.rotation = {
                        x: this.rotation.x + this.translate.x * this.rotationSpeed,
                        y: this.rotation.y + this.translate.y * this.rotationSpeed
                    }
                }
            });
            document.addEventListener('mouseup', e => {
                this.mouse.down = false;
            });
            document.addEventListener('wheel', e => {
                e.preventDefault();
                this.zoom -= e.deltaY * this.zoom / 2000;
            });
        }
    }

    get zoom() {
        return this.projection.scale();
    }

    set zoom(v) {
        this.updateMap(this.projection.scale(v));
    }

    startRotating(direction = 1, fps = 30) {
        this.rotateInterval = setInterval(() => {
            this.rotation = {
                x: this.rotation.x + direction,
                y: this.rotation.y
            };
        }, 1000 / fps)
    }

    stopRotating() {
        if (this.rotateInterval) {
            clearInterval(this.rotateInterval);
            delete this.rotateInterval;
        }
    }

    get rotationSpeed() {
        return 100 / this.zoom;
    }

    get rotation() {
        return this._rotation;
    }

    set rotation(r) {
        this._rotation = r;
        this.updateMap(this.projection.rotate([r.x, r.y]))
    }

    get map() {
        return this._map();
    }

    updateMap(projection) {
        document.getElementById('container').innerHTML = "";
        window.removeEventListener('resize', () => map.resize());

        let path = d3.geo.path()
            .projection(projection);

        this._map = new Datamap({
            element: document.getElementById('container'),
            setProjection: () => ({
                path: path,
                projection: projection
            }),
            fills: {
                defaultFill: '#DDD'
            },
            data: this.data,
            borderColor: '#CCC',
            highlightBorderWidth: 2,
            highlightBorderColor: '#B7B7B7',
            highlightFillColor: function(geo) {
                return geo.fillColor || '#F5F5F5';
            },
            geographyConfig: {
                popupTemplate: function(geo, data) {
                    return `<div class="hoverinfo"><strong>
                        Amount of movies in ${geo.properties.name}: 
                        ${data.numberOfThings}
                        </strong></div>
                    `;
                }
            },
            responsive: true
        });

        window.addEventListener('resize', () => map.resize());
    }
}
