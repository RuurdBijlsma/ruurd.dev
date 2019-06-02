document.addEventListener('DOMContentLoaded', init, false);

function init() {

}

function selectFile(e) {
    let file = e.target.files[0];
    let sizes = document.querySelector('.sizes').value;
    let sizeArray = sizes.split('\n').map(s => s.split(' ')).map(s => [+s[0], s[1]]);
    resize(file, sizeArray);
}

function removeChildren(parent) {
    while (parent.hasChildNodes())
        parent.removeChild(parent.lastChild);
}

function resize(imageFile, sizes) {
    // console.log(imageFile);
    let imageOutput = document.querySelector('.image-output');
    removeChildren(imageOutput);
    let mime = imageFile.type;
    let type = imageFile.name.split('.');
    type = type[type.length - 1];
    let name = imageFile.name.substring(0, imageFile.name.length - type.length - 1);
    let imageUrl = URL.createObjectURL(imageFile);
    let img = document.createElement('img');
    let pre = document.querySelector('pre');
    pre.innerHTML = '';
    img.src = imageUrl;
    img.addEventListener('load', () => {
        let { width, height } = img;
        let ratio = width / height;
        sizes = sizes.map(w => [w[0], Math.round(w[0] / ratio), w[1]]);
        console.log(sizes);
        pre.innerHTML = `<p>Converting to sizes:</p><p>${JSON.stringify(sizes)}</p>`;
        for (let size of sizes) {
            let name = size
            let canvas = document.createElement("canvas");
            canvas.width = size[0];
            canvas.height = size[1];
            let context = canvas.getContext('2d');
            context.drawImage(img, 0, 0, size[0], size[1]);
            let downloadUrl = canvas.toDataURL(mime);
            imageOutput.appendChild(canvas);
            let downloadButton = document.createElement('a');
            downloadButton.href = downloadUrl;
            downloadButton.setAttribute('download', `${size[2]}.${type}`);
            imageOutput.appendChild(downloadButton);
            downloadButton.click();
        }
    })
}