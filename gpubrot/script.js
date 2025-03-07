document.addEventListener('DOMContentLoaded', init, false);
mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";


function mapToReal(x, width) {
    var range = 1.2 + 2;
    return x * (range / width) - 2;
}

function mapToImaginary(y, height) {
    var range = 1.5 + 1.5;
    return y * (range / height) - 1.5;
}

function init() {
    height = window.innerHeight;
    width = window.innerWidth;

    let gpu = new GPU();
    let broodMaker = gpu.createKernel(function (time, posx, posy, zoom) {
        let x = this.thread.x;
        let y = this.thread.y;

        let ratio = this.constants.height / this.constants.width;
        let cReal = mapToReal(this.constants.width * posx + x / ratio / zoom, this.constants.width);
        let cImag = mapToImaginary(this.constants.height * posy + y / zoom, this.constants.height);
        let zReal = 0;
        let zImag = 0;

        let r = 180, g = 120, b = 222;
        let pow = 1;
        const maxIteration = 2000;
        for (let i = 0; i < maxIteration; i++) {
            let r2 = zReal * zReal + zImag * zImag;
            if (r2 > 1000000) {
                let v = zoom * zoom * Math.log(r2) / pow
                r = 64 + 128 * v;
                g = 128 * v * time / 1000;
                b = 64 + 64 * v;
                break;
            }
            let zImag2 = zImag * zImag;
            zImag = 2 * zReal * zImag + cImag;
            zReal = zReal * zReal - zImag2 + cReal;
            pow *= 2;
        }
        this.color((r % 256) / 255, (g % 256) / 255, (b % 256) / 255);

    }, {
        constants: {
            width,
            height
        },
        precision: 'unsigned',
        output: [width, height],
        loopMaxIterations: 2000,
        graphical: true,
        functions: [mapToImaginary, mapToReal]
    });



    posX = 0;
    posY = 0;
    zoom = 1;
    scaling = false;
    mouseDown = false;
    mouseX = 0;
    mouseY = 0;
    prevX = 0;
    prevY = 0;

    render(broodMaker);

    const canvas = broodMaker.getCanvas();
    document.getElementsByTagName('body')[0].appendChild(canvas);

    document.addEventListener('mousedown', ({
        pageX,
        pageY
    }) => onDown(pageX, pageY));
    document.addEventListener('mouseup', onUp);
    document.addEventListener('mousemove', ({
        pageX,
        pageY
    }) => onMove(pageX, pageY));
    canvas.addEventListener('touchstart', e => {
        if (e.touches.length === 2) {
            scaling = true;
            prevDistance = getDistance(e);
        }
        let x = e.touches[0].pageX;
        let y = e.touches[0].pageY;
        onDown(x, y);

    }, {
        passive: true
    });
    document.addEventListener('touchend', onUp, {
        passive: true
    });
    document.addEventListener('touchmove', e => {
        if (scaling)
            pinchZoom(e);
        else {
            let x = e.touches[0].pageX;
            let y = e.touches[0].pageY;
            onMove(x, y);
        }
    }, {
        passive: true
    });

    window.addEventListener(mousewheelevt, e => {
        let delta = e.detail * 33 || e.deltaY;
        onWheel(delta);
    }, {
        passive: true
    })
}

function getDistance(e) {
    return Math.hypot(
        e.touches[0].pageX - e.touches[1].pageX,
        e.touches[0].pageY - e.touches[1].pageY);
}

function pinchZoom(e) {
    let distance = getDistance(e);
    let distanceIncrease = distance - prevDistance;
    prevDistance = distance;
    let zoomMultiplier = 1 + distanceIncrease / window.innerHeight;
    zoomIn(zoomMultiplier);
}

function render(broodMaker) {
    broodMaker(performance.now(), posX, posY, zoom);
    requestAnimationFrame(() => render(broodMaker));
}

function zoomIn(factor) {
    let viewportDecrease = 1 / zoom - 1 / zoom / factor;
    posX += viewportDecrease * mouseX;
    posY += viewportDecrease * (1 - mouseY);

    zoom *= factor;
}

function onWheel(deltaY) {
    let zoomMultiplier = 1 + -deltaY / 1000;
    zoomIn(zoomMultiplier);
}

function onUp() {
    mouseDown = false;
    scaling = false;
}

function onDown(x, y) {
    mouseX = x / width / (height / width);
    mouseY = y / height;
    mouseX = prevX;
    mouseY = prevY;
    mouseDown = true;
}

function onMove(x, y) {
    if (mouseDown) {
        let moveX = mouseX - prevX;
        let moveY = mouseY - prevY;
        moveX /= zoom;
        moveY /= zoom;

        posX -= moveX;
        posY += moveY;
    }

    prevX = mouseX;
    prevY = mouseY;
    mouseX = x / width / (height / width);
    mouseY = y / height;
}