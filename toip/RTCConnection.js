class RTCConnection {
    constructor(room = 'default', ip = 'http://127.0.0.1:3000', config = {}) {
        this.peers = {};
        this.events = {};
        this.room = room;

        this.signalServer = new SignalServer(room, ip);
        this.signalServer.on('connect', () => this.emit('signalServerConnect'));
        this.signalServer.on('disconnect', () => this.emit('signalServerDisconnect'));

        this.signalServer.on('join', peerId => {
            this.newPeer = this.createPeerWithSocket(true, peerId);
            this.newPeer.on('connect', () => {
                this.peers[peerId] = this.newPeer;
            });
            console.warn("SET PEER WITH SOCKET");
        });

        this.signalServer.on('signal', (signal, peerId) => {
            if (signal.type === 'offer') {
                this.newPeer = this.createPeerWithSocket(false, peerId);
                this.newPeer.on('connect', () => {
                    if (this.peers.hasOwnProperty(peerId))
                        this.peers[peerId].destroy();
                    this.peers[peerId] = this.newPeer;
                });
                console.warn("SET PEER WITH SOCKET");
            }
            this.newPeer.signal(signal);
        });

        this.config = config;
    }

    async reconfigureConnection(peerConfig = {}) {
        this.config = peerConfig;

        for (let peerKey in this.peers) {
            peerConfig.initiator = true;
            this.newPeer = this.createPeerWithSocket(true, peerKey);
            this.newPeer.on('connect', () => {
                if (this.peers.hasOwnProperty(peerKey))
                    this.peers[peerKey].destroy();
                this.peers[peerKey] = this.newPeer;
                console.warn("SET PEER 2");
            });
        }
    }

    createPeerWithSocket(initiator, peerId) {
        this.config.initiator = initiator;
        let peer = new SimplePeer(this.config);

        peer.on('signal', signal => this.signalServer.emitSignalToPeer(signal, peerId));
        peer.on('connect', () => this.emit('peerConnect'));
        peer.on('disconnect', () => this.emit('peerDisconnect'));

        peer.on('data', data => {
            this.emit('raw', data);

            // data example: "5,click,buffer"
            // 5 is length of event name "click"
            // data type: Uint8Array
            const commaCode = 44;
            let commaPosition = data.indexOf(commaCode);
            let eventNameLength = +data.slice(0, commaPosition).toString();
            let eventName = data.slice(commaPosition + 1, commaPosition + 1 + eventNameLength).toString();
            let buffer = data.slice(commaPosition + 2 + eventNameLength);

            console.log("Received peer event:", eventName);

            this.emit(eventName, buffer.toString());
        });

        peer.on('stream', stream => this.emit('stream', stream));

        return peer;
    }

    broadcast(event, ...args) {
        Object.values(this.peers).forEach(p => this.send(p, event, ...args));
    }

    send(peer, event, ...args) {
        console.log('Send called, event:', event, 'peer:', peer);
        peer.send([event.length, event, ...args]);
    }

    emit(eventName, ...args) {
        if (this.events.hasOwnProperty(eventName)) {
            console.log(`Calling event ${eventName} ${this.events[eventName].length} times`);
            for (let callback of this.events[eventName]) {
                callback(...args);
            }
        }
    }

    on(eventName, callback) {
        if (!this.events.hasOwnProperty(eventName)) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }

    off(eventName, callback) {
        if (this.events.hasOwnProperty(eventName)) {
            this.events[eventName].remove(callback);
        } else {
            console.warn("This event does not exist");
        }
    }
}