// document.addEventListener('DOMContentLoaded', init, false);
//Todo create sound based communcation :Hmmm yes
// voeg canvas to voor debugje

const gradient = gradstop({
    stops: 255,
    inputFormat: 'hex',
    colorArray: ['#270038', '#d82588','#fff3d7']
});

async function init() {
    // create web audio api context



    listen();
}

function play() {
    context = new (window.AudioContext || window.webkitAudioContext)();
    playOscillator(context, 1000, 5000);
}


async function listen() {
    let canvas = document.querySelector('.canvas');
    let draw = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = canvas.width + 'px';
    canvas.style.height = canvas.height + 'px';
    console.log(canvas.width, canvas.height);

    let context = new (window.AudioContext || window.webkitAudioContext)();
    let stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    var analyser = context.createAnalyser();
    analyser.smoothingTimeConstant = 0.0;

    source = context.createMediaStreamSource(stream);
    source.connect(analyser);
    // analyser.connect(context.destination);
    analyser.fftSize = 32768;
    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);

    a = setInterval(() => {
        analyser.getByteFrequencyData(dataArray);
        // draw.translate(0, 1);
        draw.putImageData(draw.getImageData(0, 0, canvas.width, canvas.height), 0, 1);
        let imageData = draw.createImageData(canvas.width, 1);
        // let lastRow  = data.splice(data.length - canvas.width * 4, canvas.width * 4);
        // console.log(data);
        for (let x = 0; x < canvas.width; x++) {
            // console.log
            let bufferIndex = Math.floor(x / canvas.width * bufferLength);
            let decibel = dataArray[bufferIndex];
            let canvasIndex = x * 4;
            let color = gradient[Math.min(decibel, 254)];
            color = color.substring(4, color.length -1).split(', ').map(n=>+n);

            imageData.data[canvasIndex] = color[0];
            imageData.data[canvasIndex + 1] = color[1];
            imageData.data[canvasIndex + 2] = color[2];
            imageData.data[canvasIndex + 3] = 255;
        }
        // console.log(imageData);
        draw.putImageData(imageData, 0, 0);
        // console.log(highestFreq);
    }, 1000 / 30);
}

function playOscillator(context, duration, hertz) {
    let oscillator = context.createOscillator();
    oscillator.frequency.setValueAtTime(hertz, context.currentTime); // value in hertz
    oscillator.connect(context.destination);
    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + duration / 1000);
    setTimeout(() => oscillator.disconnect(), duration);
}