export class Circle {
    constructor(
        x,
        y,
        radius,
        friction = 0,
        acceleration = 0,
        elasticity = 0,
        dx = 0,
        dy = 0,
    ) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.acc_x = acceleration;
        this.acc_y = acceleration;
        this.radius = radius;
        this.friction = friction;

        this._minRadius = radius * (1 - elasticity / 4);
        this._maxRadius = radius;
        this._radiusX = this._maxRadius;
        this._radiusY = this._maxRadius;
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
        context.fill();
    };

    update = (canvas) => {
        if (this.y + this.radius >= canvas.height) {
            this.dy = -this.dy * (1 - this.friction);
            this.acc_y = 0;
        }

        if (this.y + this.radius + this.dy + this.gravity <= canvas.height) {
            this.dy += this.acc_y;
            this.y += this.dy;
        } else {
            this.y = canvas.height - this.radius;
        }
        this.acc_y = this.gravity;

        this.x += this.dx;
    };
}
