class Api {
    constructor(url) {
        this.appId = 'ruurdtorrent';

        this.url = url;
        this.updateToken();
        this.refreshToken = setInterval(() => this.updateToken(), 14 * 60 * 1000);
        this.onToken = function () { };
    }

    searchImdb(query) {
        let api = this;
        return new Promise(function (resolve) {
            api.get(api.url, {
                token: api.token,
                mode: 'search',
                search_string: query,
                limit: 100,
                ranked: 0,
            }).then(function (torrents) {
                let torrentList = torrents.torrent_results,
                    fullList = [];
                for (let i = 0; i < torrentList.length; i++) {
                    let episode = torrentList[i];
                    api.get('http://www.omdbapi.com/', {
                        r: 'json',
                        plot: 'short',
                        i: episode.episode_info.imdb
                    }).then(function (episodeInfo) {
                        fullList.push({
                            imdb: episodeInfo,
                            torrent: episode
                        });
                        if (fullList.length === torrentList.length)
                            resolve(fullList);
                    });
                }
            });
        });
    }

    search(query) {
        let api = this;
        return new Promise((resolve) => {
            api.get(api.url, {
                token: api.token,
                mode: 'search',
                search_string: query,
                limit: 100,
                ranked: 0,
                app_id: this.appId
            }).then(torrents => resolve(torrents.torrent_results))
        });
    }

    get token() {
        return this._token || null;
    }

    updateToken() {
        let api = this;
        this.get(this.url, { get_token: 'get_token', app_id: this.appId }).then(function (data) {
            let firstToken = !api.token;
            api._token = data.token;
            if (firstToken)
                api.onToken()
        });
    }

    get(url, data) {
        console.log({ data });
        let link = url + '?';
        for (let prop in data)
            link += prop + `=${data[prop]}&`;
        //link = 'get.php?url=' + link.substr(0, link.length - 1);
        link = 'https://api.ruurd.dev/proxy?url=' + encodeURIComponent(link + 'format=json_extended');

        console.log({ link });
        return new Promise(function (resolve) {
            fetch(link).then(response => {
                response.text().then(result => {
                    console.log({ result });
                    if (result)
                        resolve(JSON.parse(result));
                    else{
                        console.warn("Result is emtpy")
                        resolve('');
                    }
                });
            });
        });
    }
}
