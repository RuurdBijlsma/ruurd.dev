document.addEventListener('DOMContentLoaded', init, false);

function init() {
    isCaptured = false;
    element = document.querySelector('.pointer-capture');
    mouseMovedPixels = 0;
    distance = 10;


    document.addEventListener('mousemove', e => {
        if (isLocked()) {
            console.log(e);
            let distance = Math.sqrt(e.movementX ** 2 + e.movementY ** 2);
            // distance = e.movementX;
            mouseMovedPixels += distance;
        }
    }, false);
}

function isLocked() {
    return document.pointerLockElement === element;
}

function toggleCapture() {
    if (isLocked()) {
        console.log("Exiting out of lock");
        element.innerText = 'Click here to start measuring';
        document.exitPointerLock();
        document.querySelector('.pixels-moved').innerText = Math.abs(mouseMovedPixels);
        distanceMovedInput();
    } else {
        console.log("Locking pointer");
        mouseMovedPixels = 0;
        element.innerText = 'Click again when mouse is done moving';
        element.requestPointerLock();
    }
}

function distanceMovedInput(value = distance) {
    distance = value;

    let inch = value * 0.393701,
        dots = mouseMovedPixels,
        dpi = dots / inch,
        niceDpi = Math.abs(Math.round(dpi * 10) / 10);
    document.querySelector('.DPI').innerText = niceDpi;
    document.querySelector('.rounded-DPI').innerText = Math.round(niceDpi / 100) * 100;
}