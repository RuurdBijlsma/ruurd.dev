class Game {
    constructor() {
        this.levels = [];
        this.players = [];
        this.currentLevel = null;
        this.activePlayer = null;
        this.playerIndex = 0;
        this.explosions = {};
    }
    setActivePlayer(index){
        this.currentLevel.currentPlayer = index;
        this.playerIndex = index;
        this.activePlayer = this.players[index];
    }
    findLevel(name) {
        for (let level of this.levels) {
            if (level.name.toLowerCase() === name.toLowerCase())
                return level;
        }
        console.error('Level not found');
        return null;
    }
    startLevel(name) {
        this.currentLevel = this.findLevel(name);
        this.activePlayer = this.players[this.playerIndex];
        let numPlayers = this.players.length;
        for (let i = 1; i < numPlayers + 1; i++) {
            let x = i / (numPlayers + 1),
                y = this.currentLevel.getHeight(x);
            this.players[i - 1].position.x = x;
            this.players[i - 1].position.y = y;
            this.players[i - 1].angle = Math.atan(this.currentLevel.getSlope(this.players[i - 1].position).slope / Game.ratio);
        }

    }
    addLevel(...levels) {
        this.levels = this.levels.concat(levels);
    }
    addPlayer(...players) {
        this.players = this.players.concat(players);
        for (let level of this.levels) {
            console.log(level, players);
            level.players = this.players;
        }
    }
}
Game.tankWidth = 15;
Game.tankHeight = 5;
Game.bulletSize = 2;
Game.tps = 60;
Game.ratio = 16 / 9;
