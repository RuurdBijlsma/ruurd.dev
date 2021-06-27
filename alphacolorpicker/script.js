document.addEventListener('DOMContentLoaded', init, false);
scale = 1;

function init() {
    canvas = document.querySelector('canvas');
    context = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 256;
    mouseDown = false;

    canvas.addEventListener('mousedown', e => {
        mouseDown = true;
        doIt(e);
    });
    canvas.addEventListener('mousemove', e => {
        doIt(e);
    })
    document.addEventListener('mouseup', () => {
        mouseDown = false
    });
}
function doIt(e) {
    if (mouseDown) {
        let x = e.pageX - canvas.getBoundingClientRect().left;
        let y = e.pageY - canvas.getBoundingClientRect().top;
        let imageData = context.getImageData(x / scale, y / scale, 1, 1);
        let [r, g, b, a] = imageData.data;
        document.querySelector('.output').innerText = `rgba(${r}, ${g}, ${b}, ${Math.floor(a / 255 * 100) / 100})`
    }
}
function draw(image) {
    console.log(image);
    let img = document.createElement("img");
    img.src = URL.createObjectURL(image);
    img.onload = () => {
        console.log(img, img.width, img.height);
        scale = 1;
        if (img.width < window.innerWidth / 2 && img.height < window.innerHeight)
            scale = Math.floor(window.innerWidth / img.width);
        canvas.width = img.width;
        canvas.height = img.height;
        canvas.style.width = img.width * scale + 'px';
        canvas.style.height =  img.height * scale + 'px';
        context.drawImage(img, 0, 0);
    }
}