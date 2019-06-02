document.addEventListener('DOMContentLoaded', init, false);


function init() {
    client = new WebTorrent();
}

function upload(files) {
    link.style.display = 'none';
    href.innerText = "";
    if (files.length > 0)
        client.seed(files, torrent => {
            window.onbeforeunload = function () {
                return "R u sure?";
            };

            let url = location.href + "watch#" + encodeURI(torrent.magnetURI);
            link.style.display = 'block';
            href.href = url;
            href.innerText = url;
        });
}