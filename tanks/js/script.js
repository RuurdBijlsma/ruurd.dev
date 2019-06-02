$(document).ready(init);

//TODO
//collision met players DONE
//onderste voxels wegschieten zonder glitches
//
//eilanden renderen
//  Meerdere polygons hebben in level
//  isunderground aanpassen voor meerdere polygons
//  render aanpassen voor meerdere polygons
//
//valsnelheid consistent houden DONE
//parachut houden als er 2 explosies zijn DONE

function init() {
    // rtc = new WebRTC('http://82.73.30.67:2013');
    // rtc.onMessage = function(msg) {
    //     console.log("Received: ", msg);
    // }

    images = {
        parachute: new Image('parachute').element
    }

    debug = false;

    game = new Game();
    game.addLevel(new Level('Hills', 'green', 'skyblue')); //game.levels[0].smooth(.99, .99);
    game.addPlayer(new Player('Ruurd', 'yellow'), new Player('Lang', 'blue'), new Player('Memes', 'red'));
    game.startLevel('hills');

    c = $('#renderer');
    canvas = c[0];
    ctx = canvas.getContext('2d');
    bgc = $('#level');
    bgcanvas = bgc[0];
    bgctx = bgcanvas.getContext('2d');

    xc = $('#explosions');
    xcanvas = xc[0];
    xctx = xcanvas.getContext('2d');

    Game.tps = 60;
    Game.ratio = 16 / 9;
    cHeight = 1080;
    cWidth = cHeight * Game.ratio;
    size = 1;
    setCanvasSize();
    $(window).on('resize', setCanvasSize);

    pressed = [];
    $(document).keydown(keydown);
    $(document).keyup(keyup);

    c.click(function(e) {
        let x = e.pageX - c.offset().left,
            y = e.pageY - c.offset().top;
        x /= cWidth;
        y /= cHeight;
        game.currentLevel.explode(new Position(x, y), 0.05);
    });

    render();

    game.currentLevel.onExplode = onExplosion;
    drawGround(game.currentLevel);

    gameloop = self.setInterval(loop, 1000 / Game.tps);
}

function onExplosion(position, radius) {
    drawGround(game.currentLevel);

    radius *= cHeight;
    let x = Math.floor(position.x * cWidth),
        y = Math.floor(position.y * cHeight),
        size = 0.5,
        exploding = self.setInterval(function() {
            let index = Math.round(y * cWidth * x);
            game.explosions[index] = {
                position: new Position(x, y),
                radius: radius * size
            }
            size += 0.15;
            if (size > 1.1) {
                clearInterval(exploding);
                delete game.explosions[index];
            }
        }, 20);
}

function loop() {
    if (isPressed('ArrowLeft')) {
        let xMovement = game.activePlayer.speed / Game.tps;
        game.activePlayer.position.x -= xMovement;

        let slopeData = game.currentLevel.getSlope(game.activePlayer.position),
            upcomingSlope = slopeData.slope * -1,
            newY = slopeData.y;

        if (upcomingSlope < game.activePlayer.maxSlope) {
            game.activePlayer.position.x += xMovement;
        } else {
            game.activePlayer.position.y = newY;
            game.activePlayer.angle = Math.atan(-upcomingSlope / Game.ratio);
        }
    }
    if (isPressed('ArrowRight')) {
        let xMovement = game.activePlayer.speed / Game.tps;
        game.activePlayer.position.x += xMovement;

        let slopeData = game.currentLevel.getSlope(game.activePlayer.position),
            upcomingSlope = slopeData.slope,
            newY = slopeData.y;

        if (upcomingSlope < game.activePlayer.maxSlope) {
            game.activePlayer.position.x -= xMovement;
        } else {
            game.activePlayer.position.y = newY;
            game.activePlayer.angle = Math.atan(upcomingSlope / Game.ratio);
        }
    }
    if (isPressed('ArrowUp')) {
        game.activePlayer.weaponAngle -= 0.05;
        if (game.activePlayer.weaponAngle < -Math.PI) {
            game.activePlayer.weaponAngle = -Math.PI;
        }
    }
    if (isPressed('ArrowDown')) {
        game.activePlayer.weaponAngle += 0.05;
        if (game.activePlayer.weaponAngle > 0) {
            game.activePlayer.weaponAngle = 0;
        }
    }
    if (isPressed(' ')) {
        if (!game.activePlayer.shot) {
            // game.activePlayer.shot = true;
            shoot(game.activePlayer);
        }
    }
}

function shoot(player) {
    let loopPos = new Position(
            player.position.x * cWidth + Math.sin(player.angle) * (Game.tankHeight / 6 * 5) + Math.cos(player.angle + player.weaponAngle) * Game.tankWidth,
            player.position.y * cHeight - Math.cos(player.angle) * (Game.tankHeight / 6 * 5) + Math.sin(player.angle + player.weaponAngle) * Game.tankWidth),
        loopAngle = player.angle + player.weaponAngle;

    loopPos.x /= cWidth;
    loopPos.y /= cHeight;

    player.weapons[player.weaponIndex].type.shoot(loopPos, loopAngle, game.currentLevel, player.fireSpeed);
}

function render() {
    ctx.clearRect(0, 0, cWidth, cHeight);

    drawPlayers(game.players);
    drawBullets(game.players);
    drawExlosions(game.explosions);

    rendering = requestAnimationFrame(render);
}

function drawPlayers(players) {
    for (let player of players) {
        //Draw tank on angle
        let posX = player.position.x * cWidth,
            posY = player.position.y * cHeight;
        ctx.fillStyle = player.color;
        ctx.translate(posX, posY);
        ctx.rotate(player.angle);
        ctx.fillRect(-Game.tankWidth / 2, -Game.tankHeight, Game.tankWidth, Game.tankHeight);
        ctx.rotate(-player.angle);
        ctx.translate(-posX, -posY);

        //Draw tank weapon on angle
        let rotX = posX + Math.sin(player.angle) * (Game.tankHeight / 6 * 5),
            rotY = posY - Math.cos(player.angle) * (Game.tankHeight / 6 * 5);
        ctx.translate(rotX, rotY);
        ctx.rotate(player.angle + player.weaponAngle);
        ctx.fillRect(0, -Game.tankHeight / 6, Game.tankWidth, Game.tankHeight / 3);
        ctx.rotate(-player.angle - player.weaponAngle);
        ctx.translate(-rotX, -rotY);
        if (player.skydiving) {
            let parachuteSize = 1.5;
            ctx.drawImage(images.parachute, rotX - Game.tankWidth / 2, rotY - Game.tankHeight * 5 * parachuteSize, Game.tankWidth * parachuteSize, Game.tankWidth * parachuteSize);
        }
    }
}

function drawBullets(players) {
    for (let player of players) {
        for (let weapon of player.weapons) {
            ctx.fillStyle = weapon.type.bulletColor;
            for (let bullet of weapon.type.bullets) {
                ctx.fillRect(bullet.position.x * cWidth, bullet.position.y * cHeight, Game.bulletSize, Game.bulletSize);
            }
        }
    }
}

function drawVoxelLevel(level) {
    bgctx.fillStyle = level.skyColor;
    bgctx.fillRect(0, 0, cWidth, cHeight);

    bgctx.fillStyle = level.groundColor;
    let voxels = level.voxels.length,
        voxelWidth = cWidth / voxels,
        voxelHeight = cHeight / voxels;
    for (let x = 0; x < voxels; x++) {
        for (let y = 0; y < voxels; y++) {
            if (level.voxels[x][y]) {
                let posX = x / voxels,
                    posY = y / voxels;
                bgctx.strokeStyle = 'green';
                bgctx.strokeRect(posX * cWidth - voxelWidth / 2, posY * cHeight - voxelHeight / 2, voxelWidth, voxelHeight);
            }
            if (level.voxels[x][y] === 2) {
                let posX = x / voxels,
                    posY = y / voxels;
                bgctx.fillStyle = 'blue';
                bgctx.fillRect(posX * cWidth - 1, posY * cHeight - 1, 2, 2);
            }
        }
    }
}

function drawExlosions(explosions) {
    xctx.clearRect(0, 0, cWidth, cHeight);
    for (key in explosions) {
        if (typeof explosions[key] === 'function') break;
        let explosion = explosions[key],
            x = explosion.position.x,
            y = explosion.position.y,
            radius = explosion.radius,
            grd = xctx.createRadialGradient(x, y, radius, x, y, 0);
        grd.addColorStop(0, "red");
        grd.addColorStop(1, "yellow");
        xctx.fillStyle = grd;

        xctx.beginPath();
        xctx.arc(x, y, radius * size, 0, 2 * Math.PI, false);
        xctx.fill();
    }
}

function drawGround(level) {
    bgctx.fillStyle = level.skyColor;
    bgctx.fillRect(0, 0, cWidth, cHeight);

    bgctx.fillStyle = level.groundColor;
    bgctx.beginPath();
    bgctx.moveTo(level.ground[0][0] * cWidth, level.ground[0][1] * cHeight);
    for (let i = 1; i < level.ground.length; i++) {
        bgctx.lineTo(level.ground[i][0] * cWidth, level.ground[i][1] * cHeight);
        if (debug) {
            bgctx.fillStyle = 'red';
            bgctx.fillRect(level.ground[i][0] * cWidth - 2, level.ground[i][1] * cHeight - 2, 4, 4);
            bgctx.fillStyle = level.groundColor;
        }
    }
    bgctx.lineTo(cWidth, cHeight);
    bgctx.lineTo(0, cHeight);
    bgctx.closePath();
    if (debug) {
        bgctx.stroke();
    } else {
        bgctx.fill();
    }
}

function setCanvasSize() {
    ctx.clearRect(0, 0, cWidth, cHeight);

    let windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        windowRatio = windowWidth / windowHeight;

    if (windowRatio > Game.ratio) {
        cWidth = windowHeight * Game.ratio;
        cHeight = windowHeight;

        c.css('top', '0px');
        c.css('left', 'calc(50% - ' + cWidth / 2 + 'px)');
        bgc.css('top', '0px');
        bgc.css('left', 'calc(50% - ' + cWidth / 2 + 'px)');
        xc.css('top', '0px');
        xc.css('left', 'calc(50% - ' + cWidth / 2 + 'px)');
    } else {
        cWidth = windowWidth;
        cHeight = windowWidth / Game.ratio;

        c.css('top', 'calc(50% - ' + cHeight / 2 + 'px)');
        c.css('left', '0px');
        bgc.css('top', 'calc(50% - ' + cHeight / 2 + 'px)');
        bgc.css('left', '0px');
        xc.css('top', 'calc(50% - ' + cHeight / 2 + 'px)');
        xc.css('left', '0px');
    }

    size = cWidth / 930;
    Game.tankHeight = 5 * size;
    Game.tankWidth = 15 * size;
    Game.bulletSize = 2 * size;

    c.css('width', cWidth + 'px');
    c.css('height', cHeight + 'px');

    c.attr('width', cWidth);
    c.attr('height', cHeight);

    bgc.css('width', cWidth + 'px');
    bgc.css('height', cHeight + 'px');

    bgc.attr('width', cWidth);
    bgc.attr('height', cHeight);

    xc.css('width', cWidth + 'px');
    xc.css('height', cHeight + 'px');

    xc.attr('width', cWidth);
    xc.attr('height', cHeight);

    drawGround(game.currentLevel);
}

function keydown(e) {
    let key = e.originalEvent.key;
    if (!isPressed(key)) {
        pressed.push(key);
    }
}

function keyup(e) {
    let key = e.originalEvent.key;
    pressed.splice(pressed.indexOf(key), 1);
}

function isPressed(key) {
    return pressed.includes(key);
}

radToDeg = (rad) => rad * (180 / Math.PI);
degToRad = (deg) => deg * Math.PI / 180;

function time(fun, trials = 10000000) {
    let now = performance.now();
    for (let i = 0; i < trials; i++) {
        fun();
    }
    let time = (performance.now() - now) / trials,
        unit = 'milliseconds';
    if (time < 1) {
        time *= 1000;
        unit = 'microseconds';
    }
    if (time < 1) {
        time *= 1000;
        unit = 'nanoseconds';
    }
    console.log('average: ', time, unit);
}

class Image {
    constructor(name) {
        this.name = name;
        this.element = document.createElement('img');
        this.element.style.display = 'none';
        this.element.src = `img/${name}.png`;
    }
}
