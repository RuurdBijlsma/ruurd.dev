$(document).ready(init);

function init() {
    cid = $('#lines');
    canvas = cid[0];
    ctx = canvas.getContext('2d');

    cCircle = $('#circel');
    canvasCircle = cCircle[0];
    ctxCircle = canvasCircle.getContext('2d');

    image = ctx.createImageData(1, 1);

    animation = -1;
    playing = false;
    T = 0;
    colourEnabled = $('#colour');

    onWindowResize();
    $(window).on('resize', onWindowResize);

    circle = new Circle(new Point(cWidth / 2, cHeight / 2), (cWidth > cHeight ? cHeight : cWidth) / 2, Number($('#resolution').val()));

    renderCircle(circle);
    ctx.font = "30px Arial";
    ctx.globalAlpha = Number($('#opacity').val());
    colourEnabled ? colourDraw(T, circle) : drawTimes(T, circle);


    $('#resolution').on('change', updateRes);
    $('#resolution').on('keyup', updateRes);

    $('#speed').on('change', updateSpeed);
    $('#speed').on('keyup', updateSpeed);

    $('#opacity').on('change', updateOpacity);
    $('#opacity').on('keyup', updateOpacity);
}

function updateRes() {
    let res = Number($('#resolution').val());

    if (circle.resolution != res)
        setCircleResolution(res, circle);
}

function updateSpeed() {
    togglePlay();
    togglePlay();
}

function updateOpacity() {
    ctx.globalAlpha = Number($('#opacity').val());
    colourEnabled ? colourDraw(T, circle) : drawTimes(T, circle);
}

function animateCircle(c, times) {
    times = typeof times == 'undefined' ? Number($('#times').val()) : times;
    cancelAnimationFrame(animation);
    $('#animate').val('Restart animation');
    playing = true;
    $('#togPlay').val('Pause');
    let prevNow = performance.now(),
        now,
        timesPerSecond = Number($('#speed').val()) / 1000;

    ctx.strokeStyle = 'black';

    let draw = function() {
        now = performance.now();
        drawTimes(times += ((now - prevNow) * timesPerSecond), c);
        window.T = times;
        prevNow = now;
        animation = requestAnimationFrame(draw);
    }
    let drawColour = function() {
        now = performance.now();
        colourDraw(times += ((now - prevNow) * timesPerSecond), c);
        window.T = times;
        prevNow = now;
        animation = requestAnimationFrame(drawColour);
    }
    colourEnabled ? drawColour() : draw();
}

function togglePlay() {
    if (playing) {
        cancelAnimationFrame(animation);
        playing = false;
    } else {
        animateCircle(circle, window.T);
        playing = true;
    }
    $('#togPlay').val(playing ? 'Pause' : 'Play');
}

function renderCircle(c) {
    ctxCircle.clearRect(0, 0, cWidth, cHeight);

    ctxCircle.beginPath();
    ctxCircle.arc(c.center.x, c.center.y, c.radius, 0, 2 * Math.PI, false);
    ctxCircle.lineWidth = 2;
    ctxCircle.stroke();
    ctxCircle.closePath();
    ctxCircle.lineWidth = 1;

    for (let i = 0; i < c.points.length; i++) {
        setPixel(c.points[i], ctxCircle, new Colour(0, 128, 255));
    }
}

function drawTimes(times, c) {
    let round = times % 1 == 0,
        newPoint;
    ctx.beginPath();
    ctx.clearRect(0, 0, cWidth, cHeight);

    ctx.fillText("Times: " + times.toFixed(2), 10, 40);

    for (let i = 0; i < c.points.length; i++) {
        ctx.moveTo(c.points[i].x, c.points[i].y);
        newPoint = round ? c.points[Math.floor(i * times) % c.resolution] : c.getPoint(i * times % c.resolution);
        ctx.lineTo(newPoint.x, newPoint.y);
    }
    ctx.stroke();
    ctx.closePath();
}

function colourDraw(times, c) {
    let round = times % 1 == 0,
        newPoint;
    ctx.clearRect(0, 0, cWidth, cHeight);

    ctx.fillText("Times: " + times.toFixed(2), 10, 40);

    for (let i = 0; i < c.points.length; i++) {
        ctx.beginPath();
        ctx.strokeStyle = `hsl(${i / c.resolution * 360}, 100%, 50%)`;
        ctx.moveTo(c.points[i].x, c.points[i].y);
        newPoint = round ? c.points[Math.floor(i * times) % c.resolution] : c.getPoint(i * times % c.resolution);
        ctx.lineTo(newPoint.x, newPoint.y);
        ctx.closePath();
        ctx.stroke();
    }
}

function setColour(torf) {
    colourEnabled = torf;
    onWindowResize();
    togglePlay();
    togglePlay();
    ctx.strokeStyle = 'black';
}

function setCircleResolution(res, c) {
    c.setResolution(res);
    renderCircle(c);
    colourEnabled ? colourDraw(T, c) : drawTimes(T, c);
}

function setCircleSize(center, radius, c) {
    c.setSize(center, radius);
    renderCircle(c);
    colourEnabled ? colourDraw(T, c) : drawTimes(T, c);
}

function onWindowResize() {
    cWidth = $(window).width();
    cHeight = $(window).height();

    cid.attr('width', cWidth);
    cid.attr('height', cHeight);

    cCircle.attr('width', cWidth);
    cCircle.attr('height', cHeight);

    ctx.font = "30px Arial";
    ctx.globalAlpha = Number($('#opacity').val());

    if (typeof circle !== 'undefined')
        setCircleSize(new Point(cWidth / 2, cHeight / 2), (cWidth > cHeight ? cHeight : cWidth) / 2, circle);

}

function setPixel(point, context, colour = new Colour(0, 0, 0)) {
    // image.data[0] = colour.r;
    // image.data[1] = colour.g;
    // image.data[2] = colour.b;
    // image.data[3] = 255;
    // context.putImageData(image, point.x, point.y);
    let oldStyle = context.fillStyle;
    context.fillStyle = `rgb(${colour.toString()})`;
    context.fillRect(point.x - 1, point.y - 1, 3, 3);
    context.fillStyle = oldStyle;
}
