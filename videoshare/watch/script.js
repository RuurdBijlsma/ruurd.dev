document.addEventListener('DOMContentLoaded', init, false);

function init() {

    client = new WebTorrent();
    let uri = decodeURI(location.hash.substr(1));
    console.log(uri);

    client.add(uri, torrent => {
        // Got torrent metadata!
        console.log('Client is downloading:', torrent);
        document.title = torrent.name;

        torrent.files.forEach(file => {
            // Display the file by appending it to the DOM. Supports video, audio, images, and
            // more. Specify a container element (CSS selector or reference to DOM node).
            file.appendTo('body');
            let video = document.querySelector('video');
            loading.style.display = 'none';
            video.autoplay = true;
            video.play();
        });
    });
}