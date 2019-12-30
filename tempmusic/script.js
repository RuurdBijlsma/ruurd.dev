document.addEventListener('DOMContentLoaded', init, false);
const user = 1;
const server = 'https://api.ruurd.dev';

async function init() {
    fs = FileStorage.instance;
    fs.onready = () => {
        media = new MediaPlayer();
    }
}

function selectTab(tabnameElement) {
    let name = tabnameElement.getAttribute('tabname');

    document.querySelector('.tab-name[active]').removeAttribute('active');
    tabnameElement.setAttribute('active', '');

    document.querySelectorAll('.tab').forEach(t => t.style.display = 'none');

    let tab = document.querySelector(".tab." + name);
    tab.style.display = 'block';
}

async function searchSong(query) {
    let url = server + '/search/' + query;
    let response = await fetch(url);
    let results = await response.json();

    let searchTab = document.querySelector('.tab.search .search-results');
    let html = '';
    for (let song of results) {
        let title = song.title, artist = "Unknown";
        let titleParts = title.split('-');
        if (titleParts.length > 1) {
            artist = titleParts[0].trim();
            title = titleParts.slice(1).join('-').trim();
        }

        let escapedArtist = artist.replace(/\'/gi, '\\\'');
        let escapedTitle = title.replace(/\'/gi, '\\\'');

        html += `
        <div class="search-result" ytId="${song.id}">
            <div class="add-result" onclick="saveSong('${song.id}')"><i class="material-icons">${media.findById(song.id) ? 'remove' : 'add'}</i></div>
            <div class="song">
                <span class="song-title">${title}</span>
                <span class="song-artist">${artist}</span>
            </div>
            <div class="play-result"  onclick="media.playSong('${song.id}', '${escapedTitle}', '${escapedArtist}')""><i class="material-icons">play_arrow</i></div>
        </div>
        `;
    }
    searchTab.innerHTML = html;
}

async function saveSong(ytId) {
    if (media.findById(ytId))
        return await removeSong(ytId);

    console.log("Calling savesong");

    let resultElement = document.querySelector(`.search-result[ytId='${ytId}'] .add-result i`);
    resultElement.innerHTML = 'cached';
    resultElement.setAttribute('rotate', '');
    let url = server + '/save/' + ytId;
    let response = await fetch(url, { method: "POST" });
    let success = await response.text();

    media.refreshList();

    console.log("Save song success:", success);
    resultElement.removeAttribute('rotate');
    resultElement.innerHTML = 'remove';
}

async function removeSong(ytId) {
    console.log("Calling remove song");

    let resultElement = document.querySelector(`.search-result[ytId='${ytId}']`);
    resultElement.querySelector('.add-result i').innerHTML = 'cached';
    let url = server + '/remove/' + ytId;
    let response = await fetch(url, { method: "POST" });
    let success = await response.text();

    media.refreshList();

    console.log("Remove song success:", success);
    resultElement.querySelector('.add-result i').innerHTML = 'add';
}