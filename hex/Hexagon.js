class Hexagon {
    constructor(type, winnerNode = false) {
        this.pixelPosition = [0, 0];
        this.neighbours = [];
        this.type = type;
        this.winnerNode = winnerNode;
    }

    getAllNeighboursOfSameType(found = []) {
        found.push(this);

        for (let neighbour of this.neighbours) 
            if (neighbour.type === this.type && !found.includes(neighbour)) 
                neighbour.getAllNeighboursOfSameType(found);

        return found;
    }

    copy(){
        return new Hexagon(this.type, this.winnerNode);
    }
}