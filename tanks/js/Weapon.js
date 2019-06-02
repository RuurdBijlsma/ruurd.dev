class Weapon {
    constructor(name) {
        this.name = name;
        this.bulletColor = 'blue';
        this.bullets = [];

        this.explosionSize = .05;
        this.explosionDamage = 1;
        this.bulletsPerShot = 1;
        this.fireRate = 100;
        this.spread = 0.01;
    }
    shoot(position, rotation, level, initialSpeed = 10) {
        initialSpeed /= 1000;
        let speed = [Math.cos(rotation) * initialSpeed, Math.sin(rotation) * initialSpeed],
            i = 0,
            that = this;
        let shooting = self.setInterval(function() {
            let newFireRate = initialSpeed - that.spread * ((i - that.bulletsPerShot / 2) / that.bulletsPerShot / 2);
            if (i++ >= that.bulletsPerShot) {
                clearInterval(shooting);
            } else {
                that.bullets.push(new Bullet(new Position(position.x, position.y), [Math.cos(rotation) * newFireRate, Math.sin(rotation) * newFireRate], level, that));
            }
        }, 1000 / this.fireRate);
    }
}
class Bullet {
    constructor(position, speed, level, weapon) {
        this.position = position;
        this.speed = speed;
        this.level = level;
        this.weapon = weapon;
        this.bulletIndex = weapon.bullets.length;
        let that = this;
        this.traveling = self.setInterval(function() {
            that.travel(that);
        }, 1000 / Game.tps);
    }
    dispose() {
        clearInterval(this.traveling);
        let that = this;
        self.setTimeout(function() {
            that.weapon.bullets.splice(0, 1);
        }, 350);
    }
    travel(that) {
        that.speed[0] -= that.level.wind / 10000 / Game.tps;
        that.speed[1] += that.level.gravity / 100 / Game.tps;
        let newX = that.position.x + that.speed[0],
            newY = that.position.y + that.speed[1];
        if (newX > 1 || newX < 0) {
            that.dispose();
            return;
        }
        that.position.x = newX;
        that.position.y = newY;
        let voxels = that.level.voxels.length;
        //if (that.level.voxels[Math.round(that.position.x * voxels)][Math.round(that.position.y * voxels)]) {
        let hit = false;
        for (let i = 0; i < that.level.players.length; i++) {
            if (that.level.currentPlayer != i) {
                let player = that.level.players[i];
                if (player.position.distance(that.position) < 0.02)
                    hit = true;
            }
        }
        if (hit || that.level.isUnderground(that.position)) {
            that.dispose();
            that.level.explode(that.position, that.weapon.explosionSize);
        }
    }
}
