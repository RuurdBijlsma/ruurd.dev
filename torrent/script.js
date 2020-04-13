document.addEventListener('DOMContentLoaded', init, false);
//todo:
//recently searched items knoppen voor quick search
//3 knoppen bovenaan ofzo?
function init() {
    search.focus();
    api = new Api('https://torrentapi.org/pubapi_v2.php');
    if (!localStorage.magnets)
        localStorage.magnets = JSON.stringify([]);
    magnets = JSON.parse(localStorage.magnets);
    api.onToken = function () {
        //api.search('the flash').then(d => console.log(d));

        if (location.hash)
            searchFromHash();
        // processImdb('game of thrones');
    }

    window.addEventListener('hashchange', () => searchFromHash());
}

function searchFromHash(delay = 200) {
    let searchTerm = decodeURIComponent(location.hash.substr(1));
    console.log('jo')
    $('#search').val(searchTerm);
    setTimeout(async () => {
        await searchTorrent(searchTerm, true);
        let result = document.querySelector('#torrents').innerText;
        console.log({ result })
        if (result === 'No torrents found') {
            let newDelay = delay + (delay / 10) ** 2;
            console.log("Trying again in ", newDelay, "ms")
            searchFromHash(newDelay);
        }
    }, delay);
}

showSearch = e => {
    if (e.key === 'Enter')
        searchTorrent(e.target.value);
}

async function searchTorrent(query, fromHash = false) {
    title.innerText = 'Search: ' + query;

    if (!fromHash)
        history.pushState('asdf', 'as', '#' + query);

    let torrentsElement = $('#torrents'),
        searchElement = $('#search');

    searchElement.css('top', '0px');
    torrentsElement.css('top', '60px');
    torrentsElement.html('');

    let list = await api.search(query);
    let html = '',
        highestSeason = -Infinity,
        highestEpisode = -Infinity;
    if (list && list[Symbol.iterator]) {
        for (let torrent of list) {
            if (torrent.category.toLowerCase().includes('tv'))
                category = 'television';
            if (torrent.category.toLowerCase().includes('movie'))
                category = 'film';

            let size = bytesToSize(torrent.size),
                HD = torrent.title.includes('1080'),
                episodeNumber, seasonNum, episodeNum,
                date = torrent.pubdate.split(' ')[0].substr(5).split('-').reverse().join("/");
            console.log(date);
            if (torrent.episode_info === undefined || torrent.episode_info === null || torrent.episode_info.epnum === undefined || torrent.episode_info.seasonnum === undefined) {
                let match = torrent.title.match(/s[0-9][0-9]e[0-9][0-9]/i);
                if (match) {
                    episodeNumber = match[0];
                    let epInfo = episodeNumber.substr(1).split('E');
                    seasonNum = parseInt(epInfo[0]);
                    episodeNum = parseInt(epInfo[1]);
                }
            } else {
                seasonNum = parseInt(torrent.episode_info.seasonnum);
                episodeNum = parseInt(torrent.episode_info.epnum);
            }
            if (seasonNum && episodeNum) {
                episodeNumber = `S${(seasonNum < 10) ? ("0" + seasonNum) : seasonNum}E${(episodeNum < 10) ? ("0" + episodeNum) : episodeNum}`;
                let actualEpisode = torrent.title.includes(episodeNumber);

                if (seasonNum > highestSeason && actualEpisode) {
                    highestEpisode = -Infinity;
                    highestSeason = seasonNum;
                }

                if (seasonNum === highestSeason && episodeNum > highestEpisode && actualEpisode)
                    highestEpisode = episodeNum;
            }

            html += `<div episode='${episodeNumber ? episodeNumber : 'none'}' class='torrent' hd='${HD}' style="${HD && 'background-color: rgba(0,128,0,0.25)'}">
                        <i class="fa fa-${category}" aria-hidden="true"></i>
                        <div class='torrent-title'>${torrent.title.replace(/\./gi, ' ')}</div>
                        <a onclick="setMagnetVisited('${torrent.download}')" class='magnet' href='${torrent.download}'><i class="fa fa-magnet" aria-hidden="true"></i></a>
                        <div title='Seeders' class='seeders'>${torrent.seeders}</div>
                        <div title='Date uploaded' class='date'>${date}</div>
                        <div title='Size' class='size'>${size}</div>
                    </div>`;
        }
        torrentsElement.html(html);
        updateMagnetVisited();
    } else {
        torrentsElement.html(`<div class='torrent'>No torrents found</div>`);
    }
    let latestEpisode = `S${(highestSeason < 10) ? ("0" + highestSeason) : highestSeason}E${(highestEpisode < 10) ? ("0" + highestEpisode) : highestEpisode}`;
    console.log(latestEpisode);
    let bestTorrents = $(`[episode='${latestEpisode}'][hd=true]`);
    if (bestTorrents.length > 0) {
        bestTorrents.insertBefore($('.torrent')[0]);
        //$('.torrent').removeAttr('style');
        bestTorrents.css('background-color', 'rgba(0, 128, 0, 0.5)');
    } else
        $(`[episode='${latestEpisode}']`).css('box-shadow', 'inset 0px 0px 0px 100px rgba(0,0,128,0.25)');
}

function setMagnetVisited(url) {
    magnets.push(url);
    localStorage.magnets = JSON.stringify(magnets);
    updateMagnetVisited();
}

function updateMagnetVisited() {
    $(`a[onclick]`).css('color', 'maroon');
    for (let magnet of magnets) {
        $(`a[onclick="setMagnetVisited('${magnet}')"]`).css("color", "green");
    }
}

function bytesToSize(bytes) {
    let kilobytes = bytes / 1024;
    if (kilobytes < 1000)
        return Math.round(kilobytes * 100) / 100 + ' KB';
    let megabytes = kilobytes / 1024;
    if (megabytes < 1000)
        return Math.round(megabytes * 100) / 100 + ' MB';
    let gigabytes = megabytes / 1024;
    if (gigabytes < 1000)
        return Math.round(gigabytes * 100) / 100 + ' GB';
    let terabytes = gigabytes / 1024;
    if (terabytes < 1000)
        return Math.round(terabytes * 100) / 100 + ' TB';
}

function processImdb(query) {
    api.searchImdb(query).then(function (list) {
        let series = {};
        for (let result of list) {
            let torrent = result.torrent,
                episode = torrent.episode_info,
                imdb = result.imdb,
                category = 'download',
                episodeNumber = `S${(episode.seasonnum < 10) ? ("0" + episode.seasonnum) : episode.seasonnum}E${(episode.epnum < 10) ? ("0" + episode.epnum) : episode.epnum}`,
                resolution = torrent.title.includes('1080') ? 1080 : torrent.title.includes('720') ? 720 : 480,
                torrentName = torrent.title.replace(/\./gi, ' ');

            if (torrent.category.toLowerCase().includes('tv'))
                category = 'television';
            if (torrent.category.toLowerCase().includes('movie'))
                category = 'film';

            if (!series[imdb.Title])
                series[imdb.Title] = { episodes: {} };

            if (!series[imdb.Title].episodes[episode.title])
                series[imdb.Title].episodes[episode.title] = { torrents: [] };

            let thisShow = series[imdb.Title],
                thisEpisode = series[imdb.Title].episodes[episode.title];

            thisEpisode.category = category;
            thisEpisode.string = episodeNumber;
            thisEpisode.rating = imdb.imdbRating;
            thisEpisode.plot = imdb.Plot;
            thisEpisode.link = `https://www.themoviedb.org/tv/${episode.themoviedb}/season/${episode.seasonnum}/episode/${episode.epnum}`;
            thisEpisode.torrents.push({
                magnet: torrent.download,
                seeders: torrent.seeders,
                size: torrent.size,
                title: torrent.title
            })
        }
        console.log(series);
    });
}
