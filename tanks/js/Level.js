class Level {
    constructor(name, groundColor, skyColor) {
        this.name = name;
        this.skyColor = skyColor;
        this.groundColor = groundColor;
        this.ground = [
            [0, 0.5],
            [0.2, 0.3],
            [0.4, 0.6],
            [0.5, 0.5],
            [0.6, 0.4],
            [0.8, 0.6],
            [1, 0.5]
        ]; //punt [0, y] en [1, y] moet er bij zitten
        this.wind = 30;
        this.gravity = 2;
        this.retention = 0.99;
        this.smoothing = 0.99;
        this.smooth(this.retention, this.smoothing);
        this.polygon = this.groundToPolygon();
        this.voxels = this.lineToVoxel((1 - this.smoothing));
        this.ground = this.voxelToLine();
        this.quickSmooth();

        this.players = [];
        this.currentPlayer = 0;

        this.onExplode = function(position, radius) {};
    }
    fall() {
        for (let player of this.players) {
            if (player.falling) clearInterval(player.falling);
            let x = player.position.x,
                y = player.position.y,
                voxels = this.voxels.length;
            //if (!this.voxels[Math.round(x * voxels)][Math.round(y * voxels)]) {
            if (!this.isUnderground(new Position(x, y + 0.01))) {
                //player is in sky
                let newPos = new Position(player.position.x, this.getGroundHeight(player.position)),
                    slopeData = this.getSlope(newPos),
                    newAngle = Math.atan(slopeData.slope / Game.ratio),
                    fallTicks = 500 / this.gravity;

                let fallTickMultiplier = 3;
                if (0 < player.inventory.parachute) {
                    fallTicks *= fallTickMultiplier;
                    player.inventory.parachute--;
                    player.skydiving = true;
                } else if (player.skydiving) {
                    fallTicks *= fallTickMultiplier;
                }

                let fallHeight = slopeData.y - player.position.y,
                    angleDifference = newAngle - player.angle,
                    i = 0;
                fallTicks *= fallHeight;
                player.falling = self.setInterval(function() {
                    player.position.y += (fallHeight / fallTicks);
                    player.angle += (angleDifference / fallTicks);
                    if (++i > fallTicks) {
                        clearInterval(player.falling);
                        player.skydiving = false;
                        delete player.falling;
                    }
                }, 1000 / Game.tps);
            }
        }
    }
    quickSmooth(res = 1) {
        for (let i = res; i < this.ground.length - res; i++) {
            let [prevX, prevY] = this.ground[i - res], [nextX, nextY] = this.ground[i + res],
                newY = (prevY + nextY) / 2,
                newX = (prevX + nextX) / 2;
            this.ground[i] = [newX, newY];
        }
    }
    voxelToLine() {
        let voxels = this.voxels.length,
            x, y, i;
        // neighbors' relative coordinates listed in clockwise order    
        const neighbour = [
            [0, -1],
            [1, -1],
            [1, 0],
            [1, 1],
            [0, 1],
            [-1, 1],
            [-1, 0],
            [-1, -1]
        ];

        for (y = 0; y < voxels; y++) //sets first coordinate for line.
            if (this.voxels[0][y]) break; // found ground, don't look further down
        let lineGround = [
            [0, y / voxels]
        ];
        let [curX, curY] = [0, y]; //search starts here
        let direction = 0; // upward

        let looped = 0;
        do { // Continues search until right side is located, 
            // or it got stuk (max 10*voxelmap width loops)
            for (i = 0; i < 8; i++) { //check every neighbour, starting at `direction`
                [x, y] = [curX + neighbour[direction][0], curY + neighbour[direction][1]];
                // if we found ground, then pick that cell as the next one on the line
                if (x >= 0 && x < voxels && y >= 0 && y < voxels && this.voxels[x][y]) break;
                direction = (direction + 1) % 8; // turn clockwise to get next neighbour
            }
            //if it never found a valid neighbour
            if (i === 8) break;
            lineGround.push([x / voxels, y / voxels]);
            // prepare for next round
            [curX, curY] = [x, y];
            direction = (direction + 5) % 8;
        } while (looped++ <= voxels * 10 && curX < voxels - 1);

        //x=0 and x=1 have to exist, so if they don't exist yet, add them
        if (lineGround[0][0] !== 0) lineGround.splice(0, 0, [0, lineGround[0][1]]);
        if (lineGround[lineGround.length - 1][0] !== 1)
            lineGround.push([1, lineGround[lineGround.length - 1][1]]);
        return lineGround;
    }
    lineToVoxel(voxelSize) {
        let voxels = Math.ceil(1 / voxelSize),
            voxelGround = [];
        for (let x = 0; x < voxels; x++) {
            voxelGround.push([]);
            for (let y = 0; y < voxels; y++) {
                voxelGround[x].push(0);
                if (this.isUnderground(new Position(x / voxels, y / voxels))) {
                    voxelGround[x][y] = 1;
                }
            }
        }
        return voxelGround;
    }
    isUnderground(position) { //met intersect doen
        return this.isInPolygon([position.x, position.y], this.polygon);
    }
    groundToPolygon() {
        let polygon = $.extend(true, [], this.ground);
        polygon.push([1, 1]);
        polygon.push([0, 1]);
        return polygon;
    }
    isInPolygon(point, polygon) {
        let x = point[0],
            y = point[1];

        let inside = false;
        for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
            let xi = polygon[i][0],
                yi = polygon[i][1];
            let xj = polygon[j][0],
                yj = polygon[j][1];

            let intersect = ((yi > y) != (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect) inside = !inside;
        }

        return inside;
    }
    smooth(shapeRetention, smoothResolution) {
        if (shapeRetention >= 1) shapeRetention = 0.995;
        if (smoothResolution >= 1) smoothResolution = 0.995;
        this.addPoints(1 - shapeRetention);
        if (smoothResolution !== 0) this.bezierGround(1 - smoothResolution);
    }
    addPoints(resolution) {
        let isDone = true;
        for (let i = 1; i < this.ground.length; i++) {
            let leftPoint = this.ground[i - 1],
                rightPoint = this.ground[i],
                distance = Math.sqrt(Math.pow(leftPoint[0] - rightPoint[0], 2) + Math.pow(leftPoint[1] - rightPoint[1], 2));
            if (distance > resolution) {
                this.ground.splice(i, 0, [(leftPoint[0] + rightPoint[0]) / 2, (leftPoint[1] + rightPoint[1]) / 2]);
                isDone = false;
                //maak smooth punt tussen links en rechts
            }
        }
        if (!isDone) {
            this.addPoints(resolution);
        }
    }
    bezierGround(accuracy) {
        let bezier = function(points, t) {
                points = $.extend(true, [], points);
                let i = points.length - 1;
                while (i > 0) {
                    for (let j = 0; j < i; j++) points[j] = [points[j][0] + t * (points[j + 1][0] - points[j][0]), points[j][1] + t * (points[j + 1][1] - points[j][1])];
                    i--;
                }
                return points[0];
            },
            newGround = [],
            left,
            right;
        for (let i = 0; i < 1; i += accuracy) {
            newGround.push(bezier(this.ground, i));
        }
        if (newGround[0][0] !== 0) newGround.splice(0, 0, [0, newGround[0][1]]);
        if (newGround[newGround.length - 1][0] !== 1) newGround.push([1, newGround[newGround.length - 1][1]]);
        this.ground = newGround;
    }
    explode(position, radius) {
        let checkPos = new Position(0, 0),
            voxels = this.voxels.length;
        for (let x = 0; x < voxels; x++)
            for (let y = 0; y < voxels; y++) {
                checkPos.x = x / voxels;
                checkPos.y = y / voxels;
                if (position.distance(checkPos) < radius)
                    this.voxels[x][y] = 0;
            }
        this.ground = this.voxelToLine();
        this.quickSmooth();
        this.polygon = this.groundToPolygon();
        this.onExplode(position, radius);
        this.fall();
    }
    pointsIndex(left, right) { //returnt de index range van ground die tussen de 2 posities in zitten
        let leftMatch = -1,
            leftPrecision = 1,
            rightMatch = -1,
            rightPrecision = 1;
        for (let i = 0; i < this.ground.length; i++) {
            let deltaLeft = Math.sqrt(Math.pow(this.ground[i][0] - left.x, 2) + Math.pow(this.ground[i][1] - left.y, 2)),
                deltaRight = Math.sqrt(Math.pow(this.ground[i][0] - right.x, 2) + Math.pow(this.ground[i][1] - right.y, 2));
            if (deltaLeft < leftPrecision) {
                leftPrecision = deltaLeft;
                leftMatch = i;
            }
            if (deltaRight < rightPrecision) {
                rightPrecision = deltaRight;
                rightMatch = i;
            }
        }
        if (rightMatch !== -1 && leftMatch !== -1) {
            if (left.x === this.ground[leftMatch][0] && left.y === this.ground[leftMatch][1]) left.x -= 0.0001;
            if (right.x === this.ground[rightMatch][0] && right.y === this.ground[rightMatch][1]) right.x -= 0.0001;
            let leftPoint,
                rightPoint;
            if (left.x > this.ground[leftMatch][0]) {
                leftPoint = leftMatch;
            } else {
                leftPoint = leftMatch - 1;
            }
            if (right.x > this.ground[rightMatch][0]) {
                rightPoint = rightMatch + 1;
            } else {
                rightPoint = rightMatch;
            }
            return {
                left: leftPoint + 1,
                right: rightPoint - 1
            }
        }
        return -1;
    }
    getGroundHeight(position) {
        let res = 0.01,
            pos = new Position(position.x, position.y);
        for (let y = pos.y; y < 1; y += res) {
            pos.y = y;
            if (this.isUnderground(pos)) {
                return y;
            }
        }
    }
    getSlope(position) {
        let bestMatch = -1,
            precision = 1,
            x = position.x,
            y = position.y;
        for (let i = 0; i < this.ground.length; i++) {
            let delta = Math.sqrt(Math.pow(this.ground[i][0] - x, 2) + Math.pow(this.ground[i][1] - y, 2));
            if (delta < precision) {
                precision = delta;
                bestMatch = i;
            }
        }
        if (x === this.ground[bestMatch][0] && y === this.ground[bestMatch][1]) x -= 0.0001;
        let leftPoint,
            rightPoint;
        if (x > this.ground[bestMatch][0]) {
            leftPoint = this.ground[bestMatch];
            rightPoint = this.ground[bestMatch + 1]; //misschien checken of dit wel echt rechts van linkspoint is
        } else {
            leftPoint = this.ground[bestMatch - 1];
            rightPoint = this.ground[bestMatch];
        }
        let deltaX = rightPoint[0] - leftPoint[0],
            deltaY = rightPoint[1] - leftPoint[1],
            xDistance = x - leftPoint[0];
        return {
            slope: deltaY / deltaX,
            y: leftPoint[1] + (xDistance / deltaX) * deltaY
        };
    }
    getHeight(x) {
        let bestMatch = -1,
            precision = 1;
        for (let i = 0; i < this.ground.length; i++) {
            let delta = Math.abs(this.ground[i][0] - x);
            if (delta < precision) {
                precision = delta;
                bestMatch = i;
            }
        }
        if (x === this.ground[bestMatch][0]) return this.ground[bestMatch][1];
        let leftPoint,
            rightPoint;
        if (x > this.ground[bestMatch][0]) {
            leftPoint = this.ground[bestMatch];
            rightPoint = this.ground[bestMatch + 1];
        } else {
            leftPoint = this.ground[bestMatch - 1];
            rightPoint = this.ground[bestMatch];
        }
        let deltaX = rightPoint[0] - leftPoint[0],
            deltaY = rightPoint[1] - leftPoint[1];
        let xDistance = x - leftPoint[0];
        return leftPoint[1] + (xDistance / deltaX) * deltaY;
    }
}
