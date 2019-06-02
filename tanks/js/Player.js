class Player {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.score = 0;

        this.weapons = [{
            type: new Weapon('default'),
            amount: 100
        }, {
            type: new Weapon('volcano'),
            amount: 5
        }];
        this.weaponIndex = 0;
        this.weaponAngle = -0.5;

        this.inventory = { 'parachute': 1 };
        this.skydiving = false;

        this.angle = 0;
        this.fireSpeed = 10;
        this.speed = 0.1;
        this.position = new Position(0, 0.5);
        this.maxSlope = -3;
        this.shot = false;
    }
    weaponIndex(name) {
        for (let i = 0; i < this.weapons.length; i++) {
            if (this.weapons[i].type.name === name)
                return i;
        }
        return -1;
    }
    addWeapon(name, amount = 1) {
        let weaponIndex = this.weaponIndex(name);
        if (weaponIndex !== -1) {
            this.weapons[weaponIndex].amount += amount;
        } else {
            if (Weapon.hasOwnProperty(name)) {
                this.weapons.push({
                    type: Weapon[name],
                    amount: amount
                });
            } else {
                console.error('This weapon does not exist');
            }
        }
    }
}
Object.prototype.contains = function(key) {
    return this.hasOwnProperty(key);
};