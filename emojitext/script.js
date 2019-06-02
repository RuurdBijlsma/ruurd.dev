document.addEventListener('DOMContentLoaded', init, false);

function init() {
    render();
    enableAutoRefresh();
}

function selectElementContents(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}

function copy(){
    let output = document.getElementById('output');
    selectElementContents(output);
    document.execCommand("Copy");
}

function render(e) {
    if (e)
        e.preventDefault();
    let form = document.getElementById('controls');
    let output = document.getElementById('output');

    let config = [
        form.text.value,
        +form.fontSize.value,
        form.frontChar.value,
        form.backChar.value,
        form.fontFamily.value,
        +form.magnifier.value,
        1 - +form.sensitivity.value,
        +form.lineHeight.value
    ];

    if(typeof currentConfig === 'undefined' || config.join() !== currentConfig.join()){
        currentConfig = config;
        output.innerText = textToEmoji(...config);
    }
}

function autoRefresh(e) {
    e.target.checked ? enableAutoRefresh() : disableAutoRefresh();
}

function enableAutoRefresh() {
    refresher = setInterval(() => {
        render();
    }, 100);
}
function disableAutoRefresh() {
    clearInterval(refresher);
}

function textToEmoji(text, fontSize = 13, textEmoji = '⬛️', backgroundEmoji = '⬜️', fontFamily = 'Consolas', magnifier = 20, sensitivity = 0.55, lineHeight = 0.8) {
    let lines = text.split('\n');

    let textFontSize = fontSize * magnifier;

    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    context.font = `${textFontSize}px ${fontFamily}`;
    let textWidths = lines.map(l=>context.measureText(l).width);
    let width = Math.max(...textWidths);
    let height = textFontSize * lines.length * lineHeight;
    canvas.width = width;
    canvas.height = height;
    context.font = `${textFontSize}px ${fontFamily}`;

    for (let i = 0; i < lines.length; i++) {
        context.fillText(lines[i], 0, textFontSize * (i + 1) * lineHeight);
    }

    let result = '';

    for (let y = 0; y <= height; y += magnifier) {
        for (let x = 0; x <= width; x += magnifier) {
            let pixels = context.getImageData(x, y, magnifier, magnifier).data;
            let isText = false;
            let sum = 0;
            for (let i = 0; i < pixels.length; i += 4) {
                sum += pixels[i + 3];
            }
            isText = sum / (pixels.length / 4) > sensitivity * 255;
            result += isText ? textEmoji : backgroundEmoji;
        }
        result += '\n';
    }

    return result;
}
