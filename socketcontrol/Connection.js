class Connection {
    constructor(ip) {
        this.ip = ip;
        this.connected = true;
    }
    changeIP(ip) {
        this.ip = ip;
        this.connected = true;
    }
    request(data, hidden = false) {
        !hidden && $('.spinner').css('display', 'block');
        let that = this;
        let promise = new Promise(function(resolve, reject) {
            let socket = new WebSocket(that.ip);

            socket.onopen = function() {
                console.info(JSON.stringify(data));
                !that.connected && that.toggleConnectState();
                socket.send(JSON.stringify(data));
            }

            socket.onclose = function() {
                reject("Connection closed");
                $('.spinner').css('display', 'none');
            }

            socket.onerror = function(e) {
                reject(e);
                that.connected && that.toggleConnectState();
                $('.spinner').css('display', 'none');
            }

            socket.onmessage = function(e) {
                socket.close();
                let message = JSON.parse(e.data);
                if (message.success) {
                    resolve(message);
                } else {
                    reject(message);
                }
                $('.spinner').css('display', 'none');
            }
        });
        return promise;
    }
    toggleConnectState() {
        if (this.connected) {
            $('#noconnect').css('opacity', '1');
            $('#noconnect').css('pointer-events', 'all');

            this.connected = false;
            let that = this;
            let retrying = self.setInterval(function() {
                let socket = new WebSocket(that.ip);

                socket.onopen = function() {
                    clearInterval(retrying);
                    console.info('Connection established');
                    that.toggleConnectState();
                }
            }, 5000);
        } else {
            $('#noconnect').css('opacity', '0');
            $('#noconnect').css('pointer-events', 'none');
            this.connected = true;
        }
    }
}
