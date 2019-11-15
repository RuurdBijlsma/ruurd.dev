class Fun {
    constructor(canvas, audio) {
        this.audio = audio;
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.gradient = ["#000000", "#010103", "#030206", "#040309", "#06040C", "#07050F", "#090612", "#0A0715", "#0C0818", "#0D091B", "#0F0A1E", "#100B21", "#120C24", "#140D27", "#150E2A", "#170F2D", "#181030", "#1A1133", "#1B1236", "#1D1339", "#1E143C", "#20153F", "#211742", "#231845", "#241948", "#261A4B", "#281B4E", "#291C51", "#2B1D54", "#2C1E57", "#2E1F5A", "#2F205D", "#312160", "#322263", "#342366", "#352469", "#37256C", "#39266F", "#3A2772", "#3C2875", "#3D2978", "#3F2A7B", "#402B7E", "#422D81", "#432E84", "#452F87", "#46308A", "#48318D", "#493290", "#4B3393", "#4D3496", "#4E3599", "#50369C", "#51379F", "#5338A2", "#5439A5", "#563AA8", "#573BAB", "#593CAE", "#5A3DB1", "#5C3EB4", "#5E3FB7", "#5F40BA", "#6141BD", "#6243C0", "#6444C3", "#6545C6", "#6746C9", "#6847CC", "#6A48CF", "#6B49D2", "#6D4AD5", "#6E4BD8", "#704CDB", "#724DDE", "#734EE1", "#754FE4", "#7650E7", "#7851EA", "#7952ED", "#7B53F0", "#7C54F3", "#7E55F6", "#7F56F9", "#8157FC", "#8359FF", "#8458FE", "#8558FE", "#8758FE", "#8857FE", "#8A57FE", "#8B57FE", "#8D56FE", "#8E56FE", "#9056FD", "#9155FD", "#9355FD", "#9455FD", "#9554FD", "#9754FD", "#9854FD", "#9A53FD", "#9B53FD", "#9D53FC", "#9E52FC", "#A052FC", "#A152FC", "#A351FC", "#A451FC", "#A651FC", "#A750FC", "#A850FB", "#AA50FB", "#AB4FFB", "#AD4FFB", "#AE4FFB", "#B04EFB", "#B14EFB", "#B34EFB", "#B44DFB", "#B64DFA", "#B74DFA", "#B84CFA", "#BA4CFA", "#BB4CFA", "#BD4BFA", "#BE4BFA", "#C04BFA", "#C14AF9", "#C34AF9", "#C44AF9", "#C649F9", "#C749F9", "#C949F9", "#CA48F9", "#CB48F9", "#CD48F9", "#CE47F8", "#D047F8", "#D147F8", "#D346F8", "#D446F8", "#D646F8", "#D745F8", "#D945F8", "#DA45F7", "#DB44F7", "#DD44F7", "#DE44F7", "#E043F7", "#E143F7", "#E343F7", "#E442F7", "#E642F7", "#E742F6", "#E941F6", "#EA41F6", "#EC41F6", "#ED40F6", "#EE40F6", "#F040F6", "#F13FF6", "#F33FF5", "#F43FF5", "#F63EF5", "#F73EF5", "#F93EF5", "#FA3DF5", "#FC3DF5", "#FD3DF5", "#FF3DF5", "#FF3FF5", "#FF41F5", "#FF43F5", "#FF46F5", "#FF48F5", "#FF4AF5", "#FF4CF5", "#FF4FF5", "#FF51F6", "#FF53F6", "#FF56F6", "#FF58F6", "#FF5AF6", "#FF5CF6", "#FF5FF6", "#FF61F6", "#FF63F7", "#FF66F7", "#FF68F7", "#FF6AF7", "#FF6CF7", "#FF6FF7", "#FF71F7", "#FF73F7", "#FF76F7", "#FF78F8", "#FF7AF8", "#FF7CF8", "#FF7FF8", "#FF81F8", "#FF83F8", "#FF86F8", "#FF88F8", "#FF8AF9", "#FF8CF9", "#FF8FF9", "#FF91F9", "#FF93F9", "#FF96F9", "#FF98F9", "#FF9AF9", "#FF9CF9", "#FF9FFA", "#FFA1FA", "#FFA3FA", "#FFA5FA", "#FFA8FA", "#FFAAFA", "#FFACFA", "#FFAFFA", "#FFB1FB", "#FFB3FB", "#FFB5FB", "#FFB8FB", "#FFBAFB", "#FFBCFB", "#FFBFFB", "#FFC1FB", "#FFC3FB", "#FFC5FC", "#FFC8FC", "#FFCAFC", "#FFCCFC", "#FFCFFC", "#FFD1FC", "#FFD3FC", "#FFD5FC", "#FFD8FD", "#FFDAFD", "#FFDCFD", "#FFDFFD", "#FFE1FD", "#FFE3FD", "#FFE5FD", "#FFE8FD", "#FFEAFD", "#FFECFE", "#FFEFFE", "#FFF1FE", "#FFF3FE", "#FFF5FE", "#FFF8FE", "#FFFAFE", "#FFFCFE", "#FFFFFF"]
        canvas.height = canvas.offsetHeight;
        canvas.width = canvas.offsetWidth;

        let audioContext = new AudioContext();
        let source = audioContext.createMediaElementSource(document.querySelector('.audio-player'));
        this.analyser = audioContext.createAnalyser();
        source.connect(this.analyser);
        this.analyser.connect(audioContext.destination);

        this.analyser.fftSize = 32768;
        this.usableDataPercentage = 1 / 30;
        this.dataArray = new Uint8Array(Math.floor(this.analyser.frequencyBinCount));

    }


    draw() {
        let render = requestAnimationFrame(() => this.draw());

        if (!this.audio.duration)
            return;

        let y = this.audio.currentTime / this.audio.duration * this.canvas.height;
        y = Math.floor(y);

        let image = this.context.getImageData(0, y, this.canvas.width, 1);
        let data = image.data;
        //for every pixel in canvas slice
        for (let x = 0; x < data.length; x += 4) {
            let index = x / this.canvas.width * this.dataArray.length * this.usableDataPercentage;
            index = Math.floor(index);
            let value = this.dataArray[index];

            let colorIndex = value / 256 * this.gradient.length
            colorIndex = Math.floor(colorIndex);
            let color = this.gradient[colorIndex];

            let r = parseInt(color.substr(1, 2), 16),
                g = parseInt(color.substr(3, 2), 16),
                b = parseInt(color.substr(5, 2), 16);
            data[x + 0] = r;
            data[x + 1] = g;
            data[x + 2] = b;
            data[x + 3] = 255; // Alpha
        }
        this.context.putImageData(image, 0, y);



        this.analyser.getByteFrequencyData(this.dataArray);
    }
}