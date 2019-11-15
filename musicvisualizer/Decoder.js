class Decoder {
    constructor(audioContext = new AudioContext()) {
        this.context = audioContext;
    }

    async loadFile(url) {
        return new Promise((resolve, error) => {
            var req = new XMLHttpRequest();
            req.open("GET", url, true);
            req.responseType = "arraybuffer";
            req.onreadystatechange = e => {
                if (req.readyState === 4) {
                    if (req.status === 200)
                        this.context.decodeAudioData(req.response, resolve, error);
                    else
                        console.warn('error during the load.Wrong url or cross origin issue');
                }
            };
            req.send();
        });
    }

    async getIntensityGraph(song) {
        this.buffer = await this.loadFile(song);
        this.channels = [];
        for (let i = 0; i < this.buffer.numberOfChannels; i++) {
            this.channels.push(this.buffer.getChannelData(i));
        }

        let downScale = this.buffer.sampleRate / this.pointsPerSecond;
        this.graph = [];
        for (let i = 0; i < this.buffer.length; i += downScale) {
            let sum = 0;
            let items = 0;
            let resolution = 20;
            for (let n = i; n < (i + downScale) % this.buffer.length; n += resolution) {
                sum += Math.abs(this.channels[0][n]);
                items++;
            }

            if (items !== 0)
                this.graph.push(sum / items);
        }
        return this.graph;
    }
}