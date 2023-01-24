export class Circle {
    constructor(radius, x, y, dx = 0, dy = 0, elasticity = 0) {
        this._minRadius = radius * (1 - elasticity / 4);
        this._maxRadius = radius;
        this._radiusX = this._maxRadius;
        this._radiusY = this._maxRadius;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
    }

    draw = (context) => {
        context.beginPath();
        context.ellipse(
            this.x,
            this.y,
            this._radiusX,
            this._radiusY,
            0,
            0,
            2 * Math.PI,
        );
        context.stroke();
    };

    update = () => {
        this.x += this.dx;
        this.y += this.dy;
    };
}
