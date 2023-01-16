export class Circle {
    constructor(radius, x, y, dx, dy, elasticity = 0) {
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

    update = (canvas) => {
        // Up
        if (this.y - this._maxRadius < 0 && this.dy < 0) {
            this._radiusY -= Math.abs(this.dy);
        }
        if (this.y - this._maxRadius <= 0 && this.dy > 0) {
            this._radiusY += Math.abs(this.dy);
        }
        if (this.y - this._minRadius < 0) {
            this.dy = -this.dy;
        }

        // Down
        if (this.y + this._maxRadius > canvas.height && this.dy > 0) {
            this._radiusY -= Math.abs(this.dy);
        }
        if (this.y + this._maxRadius >= canvas.height && this.dy < 0) {
            this._radiusY += Math.abs(this.dy);
        }
        if (this.y + this._minRadius > canvas.height) {
            this.dy = -this.dy;
        }

        // Left
        if (this.x - this._maxRadius < 0 && this.dx < 0) {
            this._radiusX -= Math.abs(this.dx);
        }
        if (this.x - this._maxRadius <= 0 && this.dx > 0) {
            this._radiusX += Math.abs(this.dx);
        }
        if (this.x - this._minRadius < 0) {
            this.dx = -this.dx;
        }

        // Right
        if (this.x + this._maxRadius > canvas.width && this.dx > 0) {
            this._radiusX -= Math.abs(this.dx);
        }
        if (this.x + this._maxRadius >= canvas.width && this.dx < 0) {
            this._radiusX += Math.abs(this.dx);
        }
        if (this.x + this._minRadius > canvas.width) {
            this.dx = -this.dx;
        }

        this.x += this.dx;
        this.y += this.dy;
    };
}
