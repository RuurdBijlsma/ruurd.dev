class MediaPlayer {
    constructor() {
        this.refreshList();
        this.nowPlaying = '';
        this.previousSkipTime = 2;
        this.player = document.querySelector('.audio-player');

        this.player.onended = () => this.next();

        this.progressInterval = setInterval(() => this.updateProgress(), 1000 / 30);
        this.setSeekEvents();
    }

    setSeekEvents() {
        let seekBar = document.querySelector('.seek-bar');
        let holdingBar = false;
        let startMove = e => {
            let fraction = e.pageX / window.innerWidth;
            this.seek(fraction);
            holdingBar = true;
        }
        let move = e => {
            if (holdingBar) {
                let fraction = e.pageX / window.innerWidth;
                this.seek(fraction);
            }
        }
        let endMove = e => {
            holdingBar = false;
        }

        seekBar.addEventListener('mousedown', startMove);
        document.addEventListener('mousemove', move);
        document.addEventListener('mouseup', endMove);
        seekBar.addEventListener('touchstart', e => startMove(e.touches[0]));
        document.addEventListener('touchmove', e => move(e.touches[0]));
        document.addEventListener('touchend', e => endMove(e.touches[0]));
    }

    seek(timeFraction) {
        if (isNaN(this.player.duration))
            return;

        this.player.currentTime = this.player.duration * timeFraction;
    }

    updateProgress() {
        if (isNaN(this.player.duration))
            return;

        let progress = this.player.currentTime / this.player.duration;
        let thumbElement = document.querySelector('.seek-thumb');
        let progressElement = document.querySelector('.seek-progress');
        let procent = Math.round(progress * 1000) / 10;
        thumbElement.style.left = `calc(${procent}% - 4.5px)`;
        progressElement.style.width = `${procent}%`;
    }

    async refreshList() {
        this.songList = await this.fetchSongList();
        this.displaySongs(this.songList);
    }

    async fetchSongList() {
        let response = await fetch(server + '/songs/' + user);
        return await response.json();
    }

    findById(ytId) {
        return this.songList.find(f => f.ytId === ytId);
    }

    displaySongs(songs) {
        let listenTab = document.querySelector('.tab.listen');
        let html = '';
        for (let song of songs) {
            let escapedArtist = song.artist.replace(/\'/gi, '\\\'');
            let escapedTitle = song.title.replace(/\'/gi, '\\\'');

            html += `
            <div class="song" onclick="media.playSong('${song.ytid}', '${escapedTitle}', '${escapedArtist}')" ytId="${song.ytid}">
                <span class="song-title">${song.title}</span>
                <span class="song-artist">${song.artist}</span>
            </div>
            `;
        }
        listenTab.innerHTML = html;
    }

    async playSong(ytId, title, artist) {
        let active = document.querySelector(".song[active]")
        if (active)
            active.removeAttribute('active');
        let element = this.findSongElement(ytId);
        if (element)
            element.setAttribute('active', '');


        await this.loadSong(ytId);
        this.playPause(document.querySelector('.media-playpause'));

        let songInfoElement = document.querySelector('.media-player .song');
        songInfoElement.querySelector('.song-title').innerText = title;
        songInfoElement.querySelector('.song-artist').innerText = artist;
    }

    async cacheSongLocallyIfNeeded(ytId) {
        if (!await fs.exists(ytId + '.mp3'))
            await this.cacheSongLocally(ytId);
    }

    async cacheSongLocally(ytId) {
        let url = `${server}/stream/${ytId}`;
        let response = await fetch(url);
        let audioBlob = await response.blob();
        console.log("Download complete", audioBlob);

        let result = await fs.createFileFromBlob(ytId + '.mp3', audioBlob);
        console.log("Cache complete", result);
    }

    async loadSong(ytId) {
        let url = `${server}/stream/${ytId}`;
        let fileName = ytId + '.mp3';
        if (await fs.exists(fileName))
            url = (await fs.getFileByName(fileName)).toURL();

        this.nowPlaying = ytId;
        this.player.src = url;
        this.player.pause();

        let playIcon = document.querySelector('.media-playpause i');
        playIcon.setAttribute('rotate', '');
        playIcon.innerHTML = 'cached';

        this.player.oncanplay = async () => {
            playIcon.innerHTML = this.player.paused ? 'play_arrow' : 'pause';
            playIcon.removeAttribute('rotate');
            await this.cacheSongLocallyIfNeeded(ytId);
        }
    }

    playPause(element) {
        element.querySelector('i').innerHTML = this.player.paused ? 'pause' : 'play_arrow';
        if (this.player.paused)
            this.player.play();
        else
            this.player.pause();
    }

    findSongElement(ytId) {
        return document.querySelector(`.song[ytId='${ytId}']`);
    }

    getSongIndex(ytId) {
        return [...document.querySelectorAll('.listen .song')].indexOf(media.findSongElement(ytId));
    }

    previous() {
        if (this.player.currentTime < this.previousSkipTime) {
            let currentSongIndex = this.getSongIndex(this.nowPlaying);
            if (currentSongIndex <= 0) currentSongIndex += this.songList.length;
            let song = this.songList[currentSongIndex - 1];
            this.playSong(song.ytid, song.title, song.artist);
        } else {
            this.player.currentTime = 0;
        }
    }

    next() {
        let currentSongIndex = this.getSongIndex(this.nowPlaying);
        let song = this.songList[(currentSongIndex + 1) % this.songList.length];
        this.playSong(song.ytid, song.title, song.artist);
    }
}