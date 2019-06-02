class Automaton {
    /**
     * Game of Life simulation and display.
     * @param {HTMLCanvasElement} canvas Render target
     * @param {number} [scale] Size of each cell in pixels (power of 2)
     */
    constructor(canvas, scale = 1) {
        this.canvas = canvas;
        let context = canvas.getContext('webgl');
        context.webkitImageSmoothingEnabled = false;
        context.mozImageSmoothingEnabled = false;
        context.imageSmoothingEnabled = false;
        this.scale = scale;
        this.timer = null;
        this.fpsTick = performance.now();
        this.tpsTick = performance.now();

        this.setSize(4, 4);

        this.setRandom();

        if (this.renderLoop == null)
            this.renderLoop = requestAnimationFrame(() => this.draw());
    }

    shouldChangeSize(width, height) {
        let adjustedWidth = Automaton.nearestPower(width),
            adjustedHeight = Automaton.nearestPower(height);
        return adjustedHeight !== this.canvas.height ||
            adjustedWidth !== this.canvas.width;
    }

    setSize(width, height) {
        width = Automaton.nearestPower(width);
        height = Automaton.nearestPower(height);

        let save = false;
        if (this.igloo)
            save = this.get();

        this.viewSize = new Float32Array([width, height]);
        this.stateSize = new Float32Array([width / this.scale, height / this.scale]);
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.style.width = width;
        this.canvas.style.height = height;
        this.initializeIgloo(this.stateSize);

        if (save)
            this.set(save);
    }

    initializeIgloo([x, y]) {
        let igloo = this.igloo = new Igloo(this.canvas);
        let gl = igloo.gl;
        if (gl == null) {
            alert('Could not initialize WebGL!');
            throw new Error('No WebGL');
        }

        gl.disable(gl.DEPTH_TEST);
        this.programs = {
            copy: igloo.program('glsl/quad.vert', 'glsl/copy.frag'),
            gol: igloo.program('glsl/quad.vert', 'glsl/gol.frag')
        };
        this.buffers = {
            quad: igloo.array(Igloo.QUAD2)
        };

        this.textures = {
            front: igloo
                .texture(null, gl.RGBA, gl.REPEAT, gl.NEAREST)
                .blank(x, y),
            back: igloo
                .texture(null, gl.RGBA, gl.REPEAT, gl.NEAREST)
                .blank(x, y)
        };
        this.framebuffers = {
            step: igloo.framebuffer()
        };
    }

    static nearestPower(n, e = 2) {
        let power = 0;
        while (true)
            if (e ** ++power > n)
                return e ** (power - 0);
    }

    /**
     * Compact a simulation state into a bit array.
     * @param {Object} state Array-like state object
     * @returns {ArrayBuffer} Compacted bit array
     */
    static compact(state) {
        let compact = new Uint8Array(state.length / 8);
        for (let i = 0; i < state.length; i++) {
            let ii = Math.floor(i / 8),
                shift = i % 8,
                bit = state[i] ? 1 : 0;
            compact[ii] |= bit << shift;
        }
        return compact.buffer;
    }

    /**
     * Expand a simulation state from a bit array.
     * @param {ArrayBuffer} compact Compacted bit array
     * @returns {Object} Array-like state object
     */
    static expand(buffer) {
        let compact = new Uint8Array(buffer),
            state = new Uint8Array(compact.length * 8);
        for (let i = 0; i < state.length; i++) {
            let ii = Math.floor(i / 8),
                shift = i % 8;
            state[i] = (compact[ii] >> shift) & 1;
        }
        return state;
    }

    /**
     * Set the entire simulation state at once.
     * @param {Object} oldState Boolean array-like
     * @returns {GOL} this
     */
    set(oldState) {
        let [newWidth, newHeight] = this.stateSize;
        let rgba = new Uint8Array(newWidth * newHeight * 4);

        let marginTop = Math.floor((newHeight - oldState.height) / 2);
        let marginLeft = Math.floor((newWidth - oldState.width) / 2);

        for (let i = 0; i < rgba.length / 4; i++) {
            let newIndex = i * 4;
            rgba[newIndex + 0] =
                rgba[newIndex + 1] =
                rgba[newIndex + 2] = 0;
            rgba[newIndex + 3] = 255;
        }

        for (let i = 0; i < oldState.data.length; i++) {
            let x = marginLeft + (i % oldState.width);
            let y = marginTop + Math.floor(i / oldState.width);
            let alive = oldState.data[i] === 1;

            if (alive && x < newWidth && y < newHeight && x >= 0 && y >= 0) {
                let newIndex = (y * newWidth + x) * 4;

                rgba[newIndex + 0] =
                    rgba[newIndex + 1] =
                    rgba[newIndex + 2] = 255;
                rgba[newIndex + 3] = 255;
            }
        }
        this.textures.front.subset(rgba, 0, 0, newWidth, newHeight);
    }

    /**
     * Fill the entire state with random values.
     * @param {number} [p] Chance of a cell being alive (0.0 to 1.0)
     * @returns {GOL} this
     */
    setRandom(p) {
        let size = this.stateSize[0] * this.stateSize[1];
        p = p == null ? 0.5 : p;
        let rand = new Uint8Array(size);
        for (let i = 0; i < size; i++) {
            rand[i] = Math.random() < p ? 1 : 0;
        }
        this.set({
            width: this.stateSize[0],
            height: this.stateSize[1],
            data: rand
        });
    }

    /**
     * Clear the simulation state to empty.
     * @returns {GOL} this
     */
    setEmpty() {
        this.set({
            width: this.stateSize[0],
            height: this.stateSize[1],
            data: new Uint8Array(this.stateSize[0] * this.stateSize[1])
        });
    }

    /**
     * Swap the texture buffers.
     * @returns {GOL} this
     */
    swap() {
        let tmp = this.textures.front;
        this.textures.front = this.textures.back;
        this.textures.back = tmp;
    }

    /**
     * Step the Game of Life state on the GPU without rendering anything.
     * @returns {GOL} this
     */
    step() {
        // Calculate TPS
        let now = performance.now();
        let stepTime = now - this.tpsTick;
        let tps = Math.floor(1000 / stepTime);
        this.tpsTick = now;
        document.getElementById('tps').innerText = `${tps} TPS`;

        let gl = this.igloo.gl;
        this.framebuffers.step.attach(this.textures.back);
        this.textures.front.bind(0);
        gl.viewport(0, 0, this.stateSize[0], this.stateSize[1]);
        this.programs.gol.use()
            .attrib('quad', this.buffers.quad, 2)
            .uniformi('state', 0)
            .uniform('scale', this.stateSize)
            .draw(gl.TRIANGLE_STRIP, 4);
        this.swap();
    }

    /**
     * Render the Game of Life state stored on the GPU.
     * @returns {GOL} this
     */
    draw() {
        // Calculate FPS
        let now = performance.now();
        let stepTime = now - this.fpsTick;
        let fps = Math.floor(1000 / stepTime);
        this.fpsTick = now;
        document.getElementById('fps').innerText = `${fps} FPS`;

        let gl = this.igloo.gl;
        this.igloo.defaultFramebuffer.bind();
        this.textures.front.bind(0);
        gl.viewport(0, 0, this.viewSize[0], this.viewSize[1]);
        this.programs.copy.use()
            .attrib('quad', this.buffers.quad, 2)
            .uniformi('state', 0)
            .uniform('scale', this.viewSize)
            .draw(gl.TRIANGLE_STRIP, 4);

        requestAnimationFrame(() => this.draw());
    }

    /**
     * Set the state at a specific position.
     * @param {number} x
     * @param {number} y
     * @param {boolean} state True/false for live/dead
     * @returns {GOL} this
     */
    poke(x, y, state) {
        let gl = this.igloo.gl,
            v = state * 255;
        this.textures.front.subset([v, v, v, 255], x, y, 1, 1);
    }

    /**
     * @returns {Object} Boolean array-like of the simulation state
     */
    get() {
        let gl = this.igloo.gl,
            w = this.stateSize[0],
            h = this.stateSize[1];
        this.framebuffers.step.attach(this.textures.front);
        let rgba = new Uint8Array(w * h * 4);
        gl.readPixels(0, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, rgba);
        let state = new Uint8Array(w * h);
        for (let i = 0; i < w * h; i++) {
            state[i] = rgba[i * 4] > 128 ? 1 : 0;
        }
        return {
            width: w,
            height: h,
            data: state
        };
    }

    /**
     * Run the simulation automatically on a timer.
     * @returns {GOL} this
     */
    start() {
        if (this.timer == null)
            this.timer = setInterval(() => this.step(), 1000 / 60);
    }

    /**
     * Stop animating the simulation.
     * @returns {GOL} this
     */
    stop() {
        clearInterval(this.timer);
        this.timer = null;
    }

    /**
     * Toggle the animation state.
     * @returns {GOL} this
     */
    toggle() {
        if (this.timer == null)
            this.start();
        else
            this.stop();
    }

    /**
     * Find simulation coordinates for event.
     * This is a workaround for Firefox bug #69787 and jQuery bug #8523.
     * @returns {Array} target-relative offset
     */
    eventCoord(e) {
        let x = e.pageX - e.target.offsetLeft,
            y = e.target.offsetHeight - (e.pageY - e.target.offsetTop);
        return [Math.floor(x / this.scale), Math.floor(y / this.scale)];
    }
}