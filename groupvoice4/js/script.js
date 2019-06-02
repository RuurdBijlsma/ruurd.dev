//todo: 
//iets met de rechts panel, canvas met audio grafiekje is wel leuk idk
//mute speakers
//mute microphone
//iets met de settings knop
//emoji panel

document.addEventListener('DOMContentLoaded', init, false);

async function init() {
    mdc.autoInit();
    initializeIconToggles();
    await Store.initialize();
    Settings.initialize();
    Dialog.initialize(document.querySelector('.prompt'), document.querySelector('.snackbar'));
    ChatPanel.initialize(document.querySelector('.chat-panel'));

    document.addEventListener('keypress', e => {
        if (e.key === '-')
            mainWindow.webContents.toggleDevTools();
    });
}

function spinIcon(icon) {
    icon.setAttribute('class', 'fa fa-spinner');
    icon.style.animationName = 'spin';
    let button = icon.parentElement;
    button.title = 'Click to stop connecting';
}

function stopIconSpin(icon) {
    let buttonIcons = {
        'connect-button': {
            title: 'Connect to server',
            icon: 'fa fa-plug'
        },
        'quick-connect-button': {
            title: 'Quick connect',
            icon: 'fa fa-bolt'
        },
    }
    let button = icon.parentElement;
    button.title = buttonIcons[button.classList[0]].title;
    icon.style.animationName = null;
    icon.setAttribute('class', buttonIcons[button.classList[0]].icon);
}

async function cancelConnect(icon) {
    onDisconnect();

    stopIconSpin(icon);
}

function toggleMicrophone() {
    window.ts.toggleMicrophone();
}

function toggleSpeakers() {
    window.ts.toggleSpeakers();
}

async function connect() {
    let ip = await Dialog.prompt('Server IP', Store.settings.ip || 'https://rtc.ruurd.dev:5858');
    Store.settings.ip = ip;
    let room = await Dialog.prompt('Room', Store.settings.room || 'default');
    Store.settings.room = room;
    let username = await Dialog.prompt('Username', Store.settings.username || randomUserName());
    Store.settings.username = username;

    let button = document.querySelector('.connect-button');
    let icon = button.querySelector('i');

    button.onclick = () => cancelConnect(icon);
    spinIcon(icon);

    await createGroupVoice(ip, room, username);

    stopIconSpin(icon);
    button.onclick = () => quickConnect();
}

function randomUserName(){
    return 'User ' + Math.floor(Math.random() * 10000);
}

async function quickConnect() {
    let ip = Store.settings.ip || await Dialog.prompt('Server IP', 'https://rtc.ruurd.dev:5858');
    Store.settings.ip = ip;
    let room = Store.settings.room || await Dialog.prompt('Room', 'default');
    Store.settings.room = room;
    let username = Store.settings.username || await Dialog.prompt('Username', randomUserName());
    Store.settings.username = username;

    let button = document.querySelector('.quick-connect-button');
    let icon = button.querySelector('i');

    button.onclick = () => cancelConnect(icon);
    spinIcon(icon);

    await createGroupVoice(ip, room, username);

    stopIconSpin(icon);
    button.onclick = () => quickConnect();
}

function createGroupVoice(ip, room, username) {
    return new Promise(resolve => {
        let ts = new GroupVoice(ip, room, username);

        ts.on("message", (username, message) => ChatPanel.showMessage(username, message));
        ts.on("connect", () => { resolve(); onConnect(); });
        ts.on("disconnect", () => onDisconnect());

        window.ts = ts;
    });
}

function onConnect() {
    let disconnectButton = document.querySelector('.disconnect-button');
    let connectButton = document.querySelector('.connect-button');
    let quickConnectButton = document.querySelector('.quick-connect-button');
    let microphoneButton = document.querySelector('.microphone-toggle');
    let speakersButton = document.querySelector('.speakers-toggle');

    connectButton.style.display = 'none';
    quickConnectButton.style.display = 'none';
    disconnectButton.style.display = 'inline-block';
    microphoneButton.style.display = 'inline-block';
    speakersButton.style.display = 'inline-block';
}

function onDisconnect() {
    let disconnectButton = document.querySelector('.disconnect-button');
    let connectButton = document.querySelector('.connect-button');
    let quickConnectButton = document.querySelector('.quick-connect-button');
    let microphoneButton = document.querySelector('.microphone-toggle');
    let speakersButton = document.querySelector('.speakers-toggle');

    connectButton.style.display = 'inline-block';
    quickConnectButton.style.display = 'inline-block';
    disconnectButton.style.display = 'none';
    microphoneButton.style.display = 'none';
    speakersButton.style.display = 'none';

    if (ts.isMuted) {
        speakersButton.click();
    }

    ts.destroy();

    let userList = document.querySelector('.user-list');
    while (userList.hasChildNodes())
        userList.removeChild(userList.lastChild);

    delete window.ts;
}

async function checkSendMessage(e) {
    if (e.key === 'Enter') {
        if (window.ts === undefined) {
            Dialog.snackbar('You are not yet connected to a server', 'Connect').then(() => connect());
        } else {
            let message = e.target.value;
            e.target.value = '';
            window.ts.sendMessage(message);
            ChatPanel.showMessage(window.ts.username, message, false);
        }
    }
}

function initializeIconToggles() {
    let getActiveIcon = icons => {
        let activeIcon, inactiveIcon;
        if (icons[0].hasAttribute('active')) {
            activeIcon = icons[0];
            inactiveIcon = icons[1];
        } else {
            activeIcon = icons[1];
            inactiveIcon = icons[0];
        }
        return [activeIcon, inactiveIcon];
    }
    for (let button of document.querySelectorAll('[icon-toggle]')) {
        let icons = button.querySelectorAll('i');
        let [activeIcon, inactiveIcon] = getActiveIcon(icons);
        let activeDisplay = activeIcon.style.display;
        inactiveIcon.style.display = 'none';

        button.addEventListener('click', e => {
            let [activeIcon, inactiveIcon] = getActiveIcon(icons);
            activeIcon.removeAttribute('active');
            inactiveIcon.setAttribute('active', '');
            inactiveIcon.style.display = activeDisplay;
            activeIcon.style.display = 'none';
        });
    }
}