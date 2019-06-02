$(document).ready(init);

function init() {
    msgopen = false;

    if (localStorage.IP === undefined) {
        localStorage.IP = prompt('IP Adress?');
        localStorage.currentVolume = 50;
    }
    $('#errormsg').text("Could not connect to " + localStorage.IP);

    connection = new Connection('ws://' + localStorage.IP + ':912');
    getTasks();
    taskLoop = self.setInterval(getTasks, 20000);


    volumeOpen = false;
    volumeConnecting = false;
    mouseDown = false;
    volumeSlider = $('#volume');
    volumeSlider.val(localStorage.currentVolume);
    volumeSlider.on('mousedown', startVolume);
    volumeSlider.on('mouseup', endVolume);
    volumeSlider.on('touchstart', startVolume);
    volumeSlider.on('touchend', endVolume);

    getVolume();
}

function playpause() {
    connection.request({
        action: 'playpause'
    }).then(function(success) {
        console.log(success);
    }, function(error) {
        console.error(error);
    });
}

function next() {
    connection.request({
        action: 'next'
    }).then(function(success) {
        console.log(success);
    }, function(error) {
        console.error(error);
    });
}

function previous() {
    connection.request({
        action: 'previous'
    }).then(function(success) {
        console.log(success);
    }, function(error) {
        console.error(error);
    });
}

function getVolume() {
    connection.request({
        action: 'getVolume'
    }).then(function(vol) {
        vol = Number(vol.volume);
        vol *= 100;
        localStorage.currentVolume = vol;
        volumeSlider.val(localStorage.currentVolume);
    });
}

function startVolume() {
    mouseDown = true;
    changeVolume();
    voluming = self.setInterval(changeVolume, 400);
}

function changeVolume() {
    if (mouseDown && Math.round(localStorage.currentVolume / 10) != Math.round(volumeSlider.val() / 10)) {
        localStorage.currentVolume = volumeSlider.val();
        connection.request({
            action: 'setVolume',
            volume: volumeSlider.val()
        }, true);
    }
}

function endVolume() {
    mouseDown = false;
    changeVolume();
    clearInterval(voluming);
}

function changeIP() {
    let ip = prompt('IP Adress?');
    if (ip != '') {
        localStorage.IP = ip
        connection.changeIP(ip);
        getTasks();
    }
}

function getTasks() {
    connection.request({
        action: 'getTasks'
    }, true).then(function(done) {
        console.log(done);
        let html = '';
        for (let i = 0; i < done.tasks.length; i++) {
            html += `<div class='task'>
                <div onclick="killTask('${done.tasks[i]}', event)" class='kill'>✕</div>
                <div title='${done.tasks[i]}' class='title'>${done.tasks[i]}</div>
            </div>`;
        }
        $('#tasks').html(html);
    }, function(error) {
        console.error(error);
    });
}

function killTask(task, e) {
    connection.request({
        action: 'killTask',
        task: task
    }).then(function(done) {
        console.log(done);
        msg('Succesfully closed ' + task);
        $(e.target).parent().remove();
    }, function(error) {
        console.error(error);
    });
}

function command(cmd, args) {
    if (typeof cmd == 'undefined') {
        cmd = $('#cmd').val();
        args = $('#args').val();
    }

    connection.request({
        action: 'command',
        command: cmd,
        arguments: args
    }).then(function(done) {
        console.log(done);
        msg('Succesfully executed: ' + cmd + (args != '' ? ' with arguments: ' + args : ''));
    }, function(error) {
        console.error(error);
    });
}

function shutDown() {
    connection.request({
        action: 'shutdown'
    }).then(function(done) {
        console.log(done);
        msg('PC was shut down succesfully');
        $('.task').remove();
    }, function(error) {
        console.error(error);
    });
}

function msg(str) {
    if (!msgopen) {
        msgopen = true;
        $('#msg').html(str);
        $('#msg').css('bottom', '0%');
        t = setTimeout(function() {
            $('#msg').css('bottom', '-50%');
            msgopen = false;
        }, str.length * 50 + 2000);
    } else {
        clearTimeout(t);
        msgopen = false;
        msg(str);
    }
}
