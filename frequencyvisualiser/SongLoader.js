class SongLoader {
    async loadFile(url) {
        return new Promise((resolve, error) => {
            var req = new XMLHttpRequest();
            req.open("GET", url, true);
            req.responseType = "arraybuffer";
            req.onreadystatechange = e => {
                if (req.readyState === 4) {
                    if (req.status === 200)
                    resolve(req.response);
                    else
                        console.warn('error during the load.Wrong url or cross origin issue');
                }
            };
            req.send();
        });
    }
}