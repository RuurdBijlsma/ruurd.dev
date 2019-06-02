init();

async function init() {
    console.log("Initializing push server");

    self.addEventListener('push', e => {
        let data = e.data.json();

        const options = {
            body: data.Message,
            icon: data.Icon,
            vibrate: [500,110,500,110,450,110,200,110,170,40,450,110,200,110,170,40,500]
        };

        e.waitUntil(notify(data.Title, options));
    });
}

async function notify(message, options) {
    console.log("notifying");
    await self.registration.showNotification(message, options);
}
new Notification('titel', {body: 'doei', icon: 'icon.png'})