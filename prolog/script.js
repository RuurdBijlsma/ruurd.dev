document.addEventListener('DOMContentLoaded', init);

function init() {
    inputter.focus();
    createSocket().then(s => {
        socket = s;

        if (location.search.includes('code=')) {
            document.body.innerHTML = '';
            let code = location.search.split('code=')[1];
            if (code.includes('&'))
                code = code.split('&')[1];
            request('POST', 'https://ruurd.dev/prolog/post.php', {
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: 'https://ruurd.dev/prolog'
            }).then(json => {
                socket.send('secret_code_here' + json);
                console.log('json: ', json, JSON.parse(json));
                socket.onmessage = msg => {
                    console.log('received, ', msg);
                    window.close();
                };
            });
        }
    });
}


function request(type, url, data) {
    return new Promise(function(resolve) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4)
                resolve(this.responseText);
        };

        let requestParams = [];
        for (let prop in data)
            requestParams.push(prop + '=' + data[prop]);

        requestParams = requestParams.join('&');
        xhttp.open(type, url, true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.send(requestParams);
    })
}

function createSocket() {
    return new Promise(resolve => {
        let socket = new WebSocket('ws://localhost:3333/ws');
        socket.onmessage = receiveMessage;
        socket.onopen = () => resolve(socket);
    });
}

document.addEventListener('keydown', e => {
    if (e.key == 'v' && e.ctrlKey) {
        localStorage.voice = !eval(localStorage.getItem('voice'))
    }
});

function startListening() {
    getVoice().then(msg=>sendMessage(msg));
}

function getVoice() {
    return new Promise(resolve => {
        var recognition = new webkitSpeechRecognition();
        recognition.onresult = function(event) {
            resolve(event.results[0][0].transcript);
        }
        recognition.start();
    })
}

function receiveMessage(message) {
    if (localStorage.getItem('voice')) {
        let speech = new SpeechSynthesisUtterance(message.data.replace(/<(?:.|\n)*?>/gm, ''));
        speech.voice = speechSynthesis.getVoices()[3];
        speech.rate = .85;
        speech.lang = 'en-GB'
        window.speechSynthesis.speak(speech);
    }
    let p = document.createElement('p');
    p.innerHTML = `<b>Reply: </b>${message.data}`;
    msg.appendChild(p);
    msg.scrollTop = 50000000000000000;
    removeImages();
}

function removeImages() {
    let imgs = document.getElementsByTagName('img');
    for (let img of imgs)
        if (img.onerror != null)
            img.remove();
}

function handleInput(e) {
    e.preventDefault();
    sendMessage(inputter.value);
    inputter.value = '';
}

function sendMessage(text) {
    let p = document.createElement('p');
    p.setAttribute('class', 'right')
    p.innerHTML = `<b>You: </b>${text}`;
    msg.appendChild(p);
    msg.scrollTop = 50000000000000000;
    socket.send(text);
}

function redirect(link) {
    location.href = link;
}

function openwindow(link) {
    window.open(link, '_blank', {
        height: 200,
        width: 200,
        status: 0,
        menubar: 0,
        titlebar: 0,
        toolbar: 0
    });
}
