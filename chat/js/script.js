$(document).ready(init);

function init() {
    rtc = new WebRTC('https://rtc.ruurd.dev');
    rtc.onOpen = function() {
        console.info('Opened channel');
        $('input').removeAttr('disabled');
    }
    rtc.onMessage = function(msg) {
        addMessage(msg, 'other');
    }
    $('.chat header').text(rtc.room);
}

function send(event) {
    event.preventDefault();
    let msg = $('.chat form input').val();
    if (!msg)
        return false;
    $('.chat form input').val('');
    $('.chat form input').focus();
    addMessage(msg, 'me');
    rtc.send(msg);
}

function addMessage(msg, who) {
    $('.messages').append(`<p class='${who}'>${msg}</p><br>`);
    $('.messages').scrollTop($('.messages')[0].scrollHeight);
}

function changeRoom(e) {
    if (e.which === 13) {
        location.href = '#' + $('.chat header').text();
        location.reload();
    }
}
