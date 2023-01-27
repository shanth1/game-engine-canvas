import { Vec2 } from "../../utils/Math/Vector.js";

export class Circle {
    constructor(x, y, radius, friction = 0, elasticity = 0) {
        this.radius = radius;
        this.friction = friction;

        this.position = new Vec2(x, y);
        this.velocity = new Vec2(0, 0);
        this.acceleration = new Vec2(0, 0);

        this._minRadius = radius * (1 - elasticity / 4);
        this._maxRadius = radius;
        this._radiusX = this._maxRadius;
        this._radiusY = this._maxRadius;
    }

    draw = () => {
        this.context.beginPath();
        this.context.ellipse(
            this.position.x,
            this.position.y,
            this._radiusX,
            this._radiusY,
            0,
            0,
            2 * Math.PI,
        );
        this.context.fill();
    };

    update = () => {};
}
