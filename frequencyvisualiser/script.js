// document.addEventListener('DOMContentLoaded', init, false);

function fileChange(file) {
    file && init(URL.createObjectURL(file));
}

async function init(song) {
    let songLoader = new SongLoader();
    audioContext = new AudioContext();
    let response = await songLoader.loadFile(song);
    audioContext.decodeAudioData(response, buffer => {
        source = audioContext.createBufferSource();
        source.buffer = buffer;
        analyzer = audioContext.createAnalyser();
        analyzer.smoothingTimeConstant = 0.4;
        source.connect(analyzer);
        source.connect(audioContext.destination);
        source.start();
        startTime = audioContext.currentTime;

        source.connect(audioContext.destination);
        source.connect(analyzer);

        analyzer.fftSize = 32;
        let bufferLength = analyzer.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);

        previousValues = [0, 0, 0]

        channelData = buffer.getChannelData(0);

        render();
        channelContext.clearRect(0, 0, channelCanvas.width, channelCanvas.height);
        drawChannelDataLines();
    });

    context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    channelContext = channelCanvas.getContext('2d');
    channelCanvas.width = window.innerWidth;
    channelCanvas.height = window.innerHeight / 2;

    lineContext = lineCanvas.getContext('2d');
    lineCanvas.width = window.innerWidth;
    lineCanvas.height = window.innerHeight / 2;
}

function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    lineContext.clearRect(0, 0, canvas.width, canvas.height);

    drawFrequency();
    drawLine();

    requestAnimationFrame(render);
}

function drawLine() {
    let songTime = audioContext.currentTime - startTime;
    let percentage = songTime / source.buffer.duration;
    lineContext.fillStyle = 'orange';
    lineContext.fillRect(percentage * lineCanvas.width, 0, 2, lineCanvas.height);
}

function drawChannelDataLines() {
    channelContext.lineWidth = 0.1;
    channelContext.strokeStyle = 'rgba(255, 255, 255, 10)';
    channelContext.beginPath();
    channelContext.moveTo(0, channelCanvas.height / 2);

    for (let i = 0; i < channelData.length; i += 50) {
        let x = Math.floor(i * channelCanvas.width / channelData.length);
        let y = Math.floor(channelData[i] * 100 + channelCanvas.height / 2);
        channelContext.lineTo(x, y);
    }

    channelContext.lineTo(context.width, context.height / 2);
    channelContext.stroke();
}

function drawChannelData() {
    let data = channelContext.getImageData(0, 0, canvas.width, canvas.height);
    let pixels = data.data;

    for (let i = 0; i < channelData.length; i += 3) {
        let x = Math.floor(i * channelCanvas.width / channelData.length);
        let y = Math.floor(channelData[i] * 100 + channelCanvas.height / 2);
        let index = y * channelCanvas.width + x;
        index *= 4;
        pixels[index] = 255;
        pixels[index + 1] = 255;
        pixels[index + 2] = 255;
        pixels[index + 3] = Math.round(Math.min(pixels[index + 3] * 1.25 + 2, 255));
    }

    channelContext.putImageData(data, 0, 0);
}

function drawFrequency() {
    analyzer.getByteFrequencyData(dataArray);
    // let dataSlice = dataArray.slice(0, 10);
    let bufferLength = analyzer.frequencyBinCount;
    // let barWidth = (canvas.width / bufferLength);
    // let x = 0;

    // for (let i = 0; i < bufferLength; i++) {
    //     let barHeight = dataArray[i];

    //     context.fillStyle = 'rgb(' + (barHeight + 100) + ',50,50)';
    //     context.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight);

    //     x += barWidth;
    // }

    let step = Math.floor(bufferLength / 3);
    let barWidth = canvas.width / 3;
    for (let i = 0; i < bufferLength; i += step) {
        let slice = dataArray.slice(i, i + step);
        let barHeight = slice.reduce((a, b) => a + b) / slice.length;
        let rise = previousValues[i / step] - barHeight;
        previousValues[i / step] = barHeight;

        if (rise > 22) {
            context.fillStyle = 'rgb(50,50,255)';
            context.fillRect((i / step) * barWidth, 0, barWidth, canvas.height / 2);
            console.log('beat', i / step);
        } else
            context.fillStyle = 'rgb(' + (barHeight + 100) + ',50,50)';
        context.fillRect((i / step) * barWidth, canvas.height - barHeight / 2, barWidth, barHeight);
    }
}

function drawTimeDomain() {
    if (dataArray) {

        analyzer.getByteTimeDomainData(dataArray);
        let bufferLength = analyzer.frequencyBinCount;

        context.lineWidth = 1;
        context.strokeStyle = 'rgb(255, 255, 255)';

        context.beginPath();

        let sliceWidth = canvas.width * 1.0 / bufferLength;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {

            let v = dataArray[i] / 128.0;
            let y = v * canvas.height / 2;

            if (i === 0) {
                context.moveTo(x, y);
            } else {
                context.lineTo(x, y);
            }

            x += sliceWidth;
        }

        context.lineTo(context.width, context.height / 2);
        context.stroke();
    }
}