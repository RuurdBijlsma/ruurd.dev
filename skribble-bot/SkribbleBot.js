import LabConvert from "./LabConvert.js";

class SkribbleBot {
    constructor() {
        this.remainingWhitePixels = -1;
        this.debug = true;
    }

    getBrushNeighbours(width, height, x, y, brushRadius, squareBrush = false) {
        let brushSize = (brushRadius - 1) * 2 + 1;
        let neighbours = [];
        for (let nX = x - brushSize; nX <= x + brushSize; nX++)
            for (let nY = y - brushSize; nY <= y + brushSize; nY++)
                if (
                    !(nX === x && nY === y) &&
                    nX >= 0 && nX < width &&
                    nY >= 0 && nY < height &&
                    (squareBrush || this.getDist([x, y], [nX, nY]) <= brushRadius)
                )
                    neighbours.push([nX, nY]);
        // console.log(neighbours);
        return neighbours;
    }

    async imageToColours(imageData, colours, brushes, onBackground = () => { }, onPath = () => { }, canvas = new OffscreenCanvas(imageData.width, imageData.height)) {
        canvas.width = imageData.width;
        canvas.height = imageData.height;
        let context = canvas.getContext('2d');
        context.putImageData(imageData, 0, 0);

        let presetColours = colours.map(colour => ({ colour, count: 0 }));

        for (let x = 0; x < canvas.width; x++) {
            for (let y = 0; y < canvas.height; y++) {
                let i = (canvas.width * y + x) * 4;
                let colour = imageData.data.slice(i, i + 3);
                let bestDeltaE = Infinity;
                let bestColour;
                for (let presetColour of presetColours) {
                    let deltaE = LabConvert.deltaE(colour, presetColour.colour);
                    if (deltaE < bestDeltaE) {
                        bestColour = presetColour;
                        bestDeltaE = deltaE;
                    }
                }
                let matchingColour = bestColour.colour;
                bestColour.count++;
                imageData.data[i] = matchingColour[0];
                imageData.data[i + 1] = matchingColour[1];
                imageData.data[i + 2] = matchingColour[2];
            }
        }
        presetColours = presetColours.sort((a, b) => b.count - a.count);
        if (this.debug) {
            context.putImageData(imageData, 0, 0);
            await this.waitSleep(10000);
        }

        let visited = this.createVisitedGrid(canvas.width, canvas.height);
        let mainColour = presetColours.splice(0, 1)[0].colour;
        onBackground(mainColour);
        brushes = brushes.sort((a, b) => b - a);

        let newImage;
        if (this.debug) {
            context.fillStyle = `rgb(${mainColour[0]},${mainColour[1]},${mainColour[2]})`;
            context.fillRect(0, 0, canvas.height, canvas.width);
            newImage = context.getImageData(0, 0, canvas.width, canvas.height);
        }

        let searchOrigin = [0, 0];
        let paths = [];
        for (let { colour } of presetColours.filter(p => p.count > 0)) {
            for (let brush of brushes) {
                let points = [];
                while (true) {
                    let brushPos = this.findStartBrush(searchOrigin, canvas, imageData.data, visited, colour, brush, .7);
                    if (brushPos !== false) {
                        let [x, y] = brushPos;
                        points.push(brushPos);
                        searchOrigin = brushPos;

                        let brushPixels = this.getBrushNeighbours(canvas.width, canvas.height, x, y, brush);
                        brushPixels.push([x, y]);

                        for (let [x, y] of brushPixels) {
                            visited[x][y] = true;

                            if (this.debug) {
                                let i = (canvas.width * y + x) * 4;
                                newImage.data[i] = colour[0];
                                newImage.data[i + 1] = colour[1];
                                newImage.data[i + 2] = colour[2];
                            }
                        }
                    }
                    if (brushPos === false)
                        break;
                }
                if (this.debug) {
                    context.putImageData(newImage, 0, 0);
                    await this.waitSleep(50);
                }
                if (points.length > 0) {
                    let connectedPaths = this.separatePathsToConnectedPaths(points, brush, colour);
                    for (let path of connectedPaths) {
                        onPath(path);
                        paths.push(path);
                    }
                }
            }
        }

        return { background: mainColour, paths };
    }

    separatePathsToConnectedPaths(points, brush, colour) {
        let subPaths = [];
        let start = points[0];
        let subPath = [start];
        for (let i = 1; i < points.length; i++) {
            let point = points[i];
            let dist = this.getDist(start, point);
            // If the point is close enough to the previous one
            if (dist <= brush * 2) {
                //Attach path to subpath
                subPath.push(point);
                start = point;
            } else {
                subPaths.push({
                    path: subPath,
                    brush,
                    colour,
                });
                subPath = [];
                //Set start to next point so it gets added to the empty subpath, as it will have 0 distance
                if (i + 1 < points.length)
                    start = points[i + 1];
            }
        }
        return subPaths;
    }

    colourEquals(colourA, colourB) {
        return colourA[0] === colourB[0] && colourA[1] === colourB[1] && colourA[2] === colourB[2];
    }

    createVisitedGrid(width, height) {
        let visited = new Array(width);
        for (let i = 0; i < visited.length; i++)
            visited[i] = new Array(height);
        return visited;
    }

    async imageToPath(imageData, canvas = new OffscreenCanvas(imageData.width, imageData.height)) {
        canvas.width = imageData.width;
        canvas.height = imageData.height;

        let context = canvas.getContext('2d');
        context.putImageData(imageData, 0, 0);

        let contextImage = context.getImageData(0, 0, canvas.width, canvas.height);
        let cannyData = await this.imageDataToCannyData(contextImage);

        this.remainingWhitePixels = 0;
        for (let i = 0; i < cannyData.length; i += 4)
            if (cannyData[i] === 255)
                this.remainingWhitePixels++;

        context.putImageData(
            new ImageData(
                new Uint8ClampedArray(cannyData),
                canvas.width,
                canvas.height
            ), 0, 0);


        // Construct visited grid
        let visited = this.createVisitedGrid(imageData.width, imageData.height)

        let searchOrigin = [0, Math.floor(canvas.height / 2)];
        let paths = [];
        while (this.remainingWhitePixels > 0) {
            let pathOrigin = this.findStartPixel(searchOrigin, canvas, cannyData, visited, this.remainingWhitePixels);
            let path = this.getPath(pathOrigin, canvas, cannyData, visited);
            searchOrigin = path[path.length - 1];
            paths.push(path);
        }

        return paths;
    }

    fit(contains) {
        return (parentWidth, parentHeight, childWidth, childHeight, scale = 1, offsetX = 0.5, offsetY = 0.5) => {
            const childRatio = childWidth / childHeight
            const parentRatio = parentWidth / parentHeight
            let width = parentWidth * scale
            let height = parentHeight * scale

            if (contains ? (childRatio > parentRatio) : (childRatio < parentRatio)) {
                height = width / childRatio
            } else {
                width = height * childRatio
            }

            return {
                width,
                height,
                offsetX: (parentWidth - width) * offsetX,
                offsetY: (parentHeight - height) * offsetY
            }
        }
    }

    drawImage(context, img, padding = 0) {
        context.fillStyle = 'white';
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
        let contain = this.fit(true);
        const {
            offsetX,
            offsetY,
            width,
            height
        } = contain(context.canvas.width - padding * 2, context.canvas.height - padding * 2, img.width, img.height);
        context.drawImage(img, offsetX + padding, offsetY + padding, width, height);
    }

    async drawPath(context, path, lineWidth = 1, colour = 'black', timeout = 20) {
        context.strokeStyle = colour;
        context.lineWidth = lineWidth;
        context.lineCap = "round";
        context.lineJoin = "round";

        context.miterLimit = 5;

        context.beginPath();
        context.moveTo(...path[0]);
        for (let [x, y] of path) {
            await this.waitSleep(Math.random() * timeout);
            context.lineTo(x, y);
            context.stroke();
        }
    }

    async waitSleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    getPath([x, y], canvas, cannyData, visited, brushSize = 1) {
        if (!visited[x][y]) {
            this.remainingWhitePixels--;
            visited[x][y] = true;
        }
        let path = [];
        while (true) {
            path.push([x, y]);
            let isDone = true;
            //Make this brush size bigger maybe
            let neighbours = this.getBrushNeighbours(canvas.width, canvas.height, x, y, brushSize, true);
            for (let [nX, nY] of neighbours) {
                let i = (canvas.width * nY + nX) * 4;
                let isWhite = cannyData[i] === 255;
                if (isWhite && !visited[nX][nY]) {
                    this.remainingWhitePixels--;
                    visited[nX][nY] = true;
                    x = nX;
                    y = nY;
                    isDone = false;
                }
            }
            if (isDone)
                break;
        }
        return path;
    }

    async getImageFromUrl(imageUrl) {
        return new Promise(resolve => {
            let image = new Image();
            image.src = imageUrl;
            image.onload = () => resolve(image);
        });
    }

    async getImageData(image, width, height, padding = 0) {
        let canvas = document.createElement('canvas');
        let context = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        this.drawImage(context, image, padding);
        return context.getImageData(0, 0, canvas.width, canvas.height);
    }

    async imageDataToCannyData(contextImage) {
        return new Promise(resolve => {
            let worker = new Worker('./lib/canny-worker.js');
            worker.addEventListener('message', e => {
                if (e.data.type === 'gradientMagnitude')
                    resolve(e.data.data);
            }, false)

            worker.postMessage({
                cmd: 'appData',
                data: {
                    width: contextImage.width,
                    height: contextImage.height,
                    lt: 0.17,
                    up: .4,
                }
            });

            worker.postMessage({
                cmd: 'imgData',
                data: contextImage.data
            });
        })
    }

    getDist([x1, y1], [x2, y2]) {
        return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    }

    findStartBrush(searchOrigin, canvas, imageData, visited, colour = [255, 255, 255], brushSize = 1, matchRatioTreshold = 0.5) {
        let startPixel;
        let bfsVisited = this.createVisitedGrid(canvas.width, canvas.height)
        let breadth = [searchOrigin];//Front line of bfs
        outer:
        while (true) {
            let newBreadth = [];
            for (let [x, y] of breadth) {

                let neighbours = this.getBrushNeighbours(canvas.width, canvas.height, x, y, brushSize);
                let matchCount = 0;
                for (let [nX, nY] of neighbours) {
                    let i = (canvas.width * nY + nX) * 4;
                    let isColour = this.colourEquals(imageData.slice(i, i + 3), colour);
                    if (isColour)
                        matchCount++;
                    if (!bfsVisited[nX][nY]) {
                        bfsVisited[nX][nY] = true;
                        let dist = this.getDist([x, y], [nX, nY]);
                        if (Math.abs(dist - brushSize) < 1)
                            newBreadth.push([nX, nY]);
                    }
                }
                let matchRatio = matchCount / neighbours.length;
                if (matchRatio >= matchRatioTreshold && !visited[x][y]) {
                    //Found it
                    startPixel = [x, y];
                    break outer;
                }
            }
            breadth = newBreadth;
            if (breadth.length === 0)
                return false;
        }
        return startPixel;
    }

    //dont return pixel that's in visited already
    findStartPixel(searchOrigin, canvas, imageData, visited = false, remainingPixelsOfColour, colour = [255, 255, 255]) {
        if (remainingPixelsOfColour <= 0)
            throw "There are no more pixels of this color";
        let startPixel;
        let bfsVisited = this.createVisitedGrid(canvas.width, canvas.height)
        let breadth = [searchOrigin];//Front line of bfs
        outer:
        while (true) {
            let newBreadth = [];
            for (let [x, y] of breadth) {
                let neighbours = this.getBrushNeighbours(canvas.width, canvas.height, x, y, 2, true);
                for (let [nX, nY] of neighbours) {
                    let i = (canvas.width * nY + nX) * 4;
                    let isColour = this.colourEquals(imageData.slice(i, i + 3), colour);
                    if (isColour && (visited === false || !visited[nX][nY])) {
                        startPixel = [nX, nY];
                        break outer;
                    }
                    if (!bfsVisited[nX][nY]) {
                        bfsVisited[nX][nY] = true;
                        newBreadth.push([nX, nY]);
                    }

                }
            }
            breadth = newBreadth;
            if (breadth.length === 0)
                return false;
        }
        return startPixel;
    }
}

export default new SkribbleBot();