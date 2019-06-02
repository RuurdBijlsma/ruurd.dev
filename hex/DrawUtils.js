class DrawUtils {
    static get hexagonWidth() { return 1.7321 }

    static drawRotated(context, drawFunction, rotation, rotateX, rotateY) {
        context.translate(rotateX, rotateY);
        context.rotate(rotation);
        drawFunction(context);
        context.restore();
        context.rotate(-rotation);
        context.translate(-rotateX, -rotateY);
    }

    static drawHexagon(context, x, y, size = 20, fill = true) {
        let width = size * this.hexagonWidth;
        let height = size * 2;

        let hexagonAngle = 0.523598776, // 30 degrees in radians
            hexHeight = Math.sin(hexagonAngle) * size,
            hexRadius = Math.cos(hexagonAngle) * size,
            hexRectangleHeight = size + 2 * hexHeight,
            hexRectangleWidth = 2 * hexRadius;

        context.beginPath();
        context.moveTo(x + hexRadius, y);
        context.lineTo(x + hexRectangleWidth, y + hexHeight);
        context.lineTo(x + hexRectangleWidth, y + hexHeight + size);
        context.lineTo(x + hexRadius, y + hexRectangleHeight);
        context.lineTo(x, y + size + hexHeight);
        context.lineTo(x, y + hexHeight);
        context.closePath();

        if (fill) {
            context.fill();
        } else {
            context.stroke();
        }
    }
}