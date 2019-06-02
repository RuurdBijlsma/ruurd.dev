class Car {
    constructor() {
        this.color = 'black';
        this.width = 20;
        this.height = 40;

        this.rotation = 0;
        this.position = {
            x: 100,
            y: 100
        };
        this.speed = {
            x: 0,
            y: 0
        };
        this.acceleration = 0.02;
        this.rotateSpeed = 0.05;
    }

    accelerate(multiplier = 1) {
        this.speed.y += this.acceleration * multiplier;
    }

    turn(multiplier = 1) {
        this.rotation += this.rotateSpeed * multiplier;
    }

    tick() {
        let rotation = this.rotation + Math.PI / 2;
        let xAdd = this.speed.y * Math.cos(rotation);
        let yAdd = this.speed.y * Math.sin(rotation);

        let xAddDrift = this.speed.x * Math.cos(rotation);
        let yAddDrift = this.speed.x * Math.sin(rotation);
        
        this.position.x += xAdd + this.xAddDrift;
        this.position.y += yAdd + this.xAddDrift;
    }

    draw(context) {
        Game.drawRotated(context, context => {
            context.fillStyle = this.color;
            context.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
        }, this.rotation, this.position.x, this.position.y);
    }
}