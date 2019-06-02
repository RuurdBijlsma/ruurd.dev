class Particle {
    constructor(x, y, velocity = [0, 0], acceleration = [0, 0], friction = 0.001, size = 4, color = 'white') {
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.friction = friction;

        this.size = size;
        this.color = color;
    }

    accelerateTowardsTarget(target, acceleration = 1) {
        let direction = [target[0] - this.x, target[1] - this.y];
        let directionLength = Math.sqrt(direction[0] ** 2 + direction[1] ** 2);
        this.acceleration = direction.map(d => d / directionLength * acceleration);
    }

    update() {
        this.x += this.velocity[0];
        this.y += this.velocity[1];
        this.velocity[0] += this.acceleration[0];
        this.velocity[1] += this.acceleration[1];

        this.velocity[0] *= (1 - this.friction);
        if (Math.abs(this.velocity[0]) < this.friction) {
            this.velocity[0] = 0;
        }
        this.velocity[1] *= (1 - this.friction);
        if (Math.abs(this.velocity[1]) < this.friction) {
            this.velocity[1] = 0;
        }

        this.acceleration = [0, 0];
    }

    draw(context) {
        context.fillStyle = this.color;
        context.strokeStyle = this.color;
        // context.fillRect(
        //     this.x - this.size / 2,
        //     this.y - this.size / 2,
        //     this.size,
        //     this.size
        // );

        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        context.fill();

        // context.lineWidth = this.size;
        // context.beginPath();
        // context.moveTo(this.prevX, this.prevY);
        // context.lineTo(this.x, this.y);
        // context.stroke();
        // context.stroke();
        this.prevX = this.x;
        this.prevY = this.y;
    }
}