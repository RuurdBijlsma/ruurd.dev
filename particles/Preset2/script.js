document.addEventListener('DOMContentLoaded', init, false);

function onSizeChange(canvas) {
    let {
        innerWidth,
        innerHeight
    } = window;
    let widthModifier = innerWidth / canvas.width;
    let heightModifier = innerHeight / canvas.height;

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    for (let particle of particles) {
        particle.x *= widthModifier;
        particle.y *= heightModifier;
    }
}

function init() {
    hue = 0;
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    particles = [];
    onSizeChange(canvas);
    particles = spawnParticles(canvas.width, canvas.height, 20);

    window.addEventListener('resize', () => onSizeChange(canvas));

    mouseX = canvas.width / 2;
    mouseY = canvas.height / 2;
    mouseDown = false;
    window.addEventListener('mousemove', ({
        pageX,
        pageY
    }) => {
        mouseX = pageX;
        mouseY = pageY;
    });
    canvas.addEventListener('mousedown', () => {
        mouseDown = true;
    });
    document.addEventListener('mouseup', () => {
        mouseDown = false;
    });
    window.addEventListener('touchmove', (e) => {
        let {
            pageX,
            pageY
        } = e.touches[0];
        mouseX = pageX;
        mouseY = pageY;
    });
    canvas.addEventListener('touchstart', () => {
        mouseDown = true;
    });
    document.addEventListener('touchend', () => {
        mouseDown = false;
    });


    draw();

    tps = 30;
    gameLoop = setInterval(() => tick(), 1000 / tps);
}

function spawnParticles(width, height, step = 50) {
    let particles = [];
    let hue = 360;


    for (let y = 0; y < height + step; y += step) {
        for (let x = 0; x < width + step; x += step) {
            let pX = x + -step / 2 + Math.random() * step;
            let pY = y + -step / 2 + Math.random() * step;
            let p = new Particle(pX, pY);

            p.color = `white`;
            p.size = 2;
            p.friction = 0.01;

            particles.push(p);
        }
    }

    return particles;
}

function tick() {
    for (let particle of particles) {
        particle.color = `hsl(${hue % 360}, 100%, 50%)`;
        if (mouseDown) {
            particle.accelerateTowardsTarget([mouseX, mouseY], 0.3);
        }
        particle.update();
    }
    hue += 2;
}

function draw() {
    requestAnimationFrame(draw);
    // context.clearRect(0, 0, canvas.width, canvas.height);

    for (let particle of particles) {
        particle.draw(context);
    }
}

function onMouseMove(x, y) {
    mouseX = x;
    mouseY = y;
}