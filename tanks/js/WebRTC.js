RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
RTCSessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription;

class WebRTC {
    constructor(signalServer) {
        this.signalServer = signalServer;
        this.room = location.hash.substring(1);

        this.onMessage = function(msg) {
            console.log('Received: ', msg);
        }
        this.onOpen = function(e) {
            console.log('Channel opened');
        }

        if (!this.room) {
            this.room = window.location.hash = this.randomToken();
        }

        this.configuration = { 'iceServers': [{ 'url': 'stun:stun.l.google.com:19302' }] };
        this.isInitiator = false;

        this.peerConnection;
        this.dataChannel;

        //Signaling server:
        this.socket = io.connect(this.signalServer);

        let that = this;
        this.socket.on('ipaddr', function(ipaddr) {
            console.log('Server IP address is: ' + ipaddr);
            this.signalServer = ipaddr;
        });

        this.socket.on('created', function(room, clientId) {
            console.log('Created room', room, '- my client ID is', clientId);
            that.isInitiator = true;
        });

        this.socket.on('joined', function(room, clientId) {
            console.log('This peer has joined room', room, 'with client ID', clientId);
            that.isInitiator = false;
        });

        this.socket.on('full', function(room) {
            alert('Room "' + room + '" is full. We will create a new room for you.');
            window.location.hash = '';
            window.location.reload();
        });

        this.socket.on('ready', function() {
            that.createPeerConnection(that.configuration);
        })

        this.socket.on('log', function(array) {
            console.log.apply(console, array);
        });

        this.socket.on('message', function(message) {
            console.log('Client received message:', message);
            that.signalingMessageCallback(message);
        });

        // Join a room
        this.socket.emit('create or join', that.room);

        if (location.hostname.match(/localhost|127\.0\.0/)) {
            this.socket.emit('ipaddr');
        }
    }

    send(data) {
        if (this.dataChannel) {
            this.dataChannel.send(data);
        } else {
            console.log('No connected peer found');
        }
    }

    sendSocket(message) { //Send message to signaling server
        console.log('Client sending message: ', message);
        this.socket.emit('message', message);
    }

    signalingMessageCallback(message) {
        let that = this;
        if (message.type === 'offer') {
            console.log('Got offer. Sending answer to peer.');
            this.peerConnection.setRemoteDescription(new RTCSessionDescription(message), function() {}, this.logError);
            this.peerConnection.createAnswer(function(desc) {
                that.onLocalSessionCreated(desc, that);
            }, this.logError);

        } else if (message.type === 'answer') {
            console.log('Got answer.');
            this.peerConnection.setRemoteDescription(new RTCSessionDescription(message), function() {}, this.logError);

        } else if (message.type === 'candidate') {
            this.peerConnection.addIceCandidate(new RTCIceCandidate({ candidate: message.candidate }));

        } else if (message === 'bye') {
            // TODO: cleanup RTC connection?
        }
    }

    createPeerConnection(config) {
        let that = this;
        console.log('Creating Peer connection as initiator?', this.isInitiator, 'config:', config);
        this.peerConnection = new RTCPeerConnection(config);

        // send any ice candidates to the other peer
        this.peerConnection.onicecandidate = function(event) {
            console.log('onIceCandidate event:', event);
            if (event.candidate) {
                that.sendSocket({
                    type: 'candidate',
                    label: event.candidate.sdpMLineIndex,
                    id: event.candidate.sdpMid,
                    candidate: event.candidate.candidate
                });
            } else {
                console.log('End of candidates.');
            }
        };

        if (this.isInitiator) {
            console.log('Creating Data Channel');
            this.dataChannel = this.peerConnection.createDataChannel("data");
            this.onDataChannelCreated(this.dataChannel);

            console.log('Creating an offer');
            this.peerConnection.createOffer(function(desc) {
                that.onLocalSessionCreated(desc, that);
            }, this.logError);
        } else {
            this.peerConnection.ondatachannel = function(event) {
                console.log('ondatachannel:', event.channel);
                that.dataChannel = event.channel;
                that.onDataChannelCreated(that.dataChannel);
            };
        }
    }

    onLocalSessionCreated(desc, that) {
        console.log('local session created:', desc);
        that.peerConnection.setLocalDescription(desc, function() {
            console.log('sending local desc:', that.peerConnection.localDescription);
            that.sendSocket(that.peerConnection.localDescription);
        }, that.logError);
    }

    onDataChannelCreated(channel) {
        let that = this;
        console.log('onDataChannelCreated:', channel);

        channel.onopen = function(event) {
            console.log('Opened channel');
            that.onOpen(event);
        }

        channel.onmessage = function(event) {
            console.log('Received event: ', event);
            that.onMessage(event.data);
        }
    }

    randomToken() {
        return Math.floor((1 + Math.random()) * 1e16).toString(16).substring(1);
    }

    logError(err) {
        console.log(err.toString(), err);
    }
}
