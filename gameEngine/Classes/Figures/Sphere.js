import { Vec2 } from "../../utils/Math/Vector.js";

export class Sphere {
    constructor(x, y, radius, friction, elasticity = 0) {
        this.radius = radius;
        this.friction = friction;

        this.position = new Vec2(x, y);
        this.velocity = new Vec2(0, 0);
        this.acceleration = new Vec2(0, 0);

        this._minRadius = radius * (1 - elasticity / 4);
        this._maxRadius = radius;
        this._radiusX = this._maxRadius;
        this._radiusY = this._maxRadius;

        this.visibleVectors = true;
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
        this._drawVectors();
    };

    _drawVectors() {
        if (!this.visibleVectors) return;
        this.acceleration
            .getUnitVector()
            .drawVector(
                this.context,
                this.position.x,
                this.position.y,
                60,
                "red",
            );
        this.velocity.drawVector(
            this.context,
            this.position.x,
            this.position.y,
            10,
            "green",
        );
    }

    _resolveBorderCollision() {
        if (this.position.y + this.radius > this.canvas.height) {
            this.position.y = this.canvas.height - this.radius;
            this.velocity.y = -this.velocity.y;
        }
        if (this.position.y - this.radius < 0) {
            this.position.y = this.radius;
            this.velocity.y = -this.velocity.y;
        }
        if (this.position.x + this.radius > this.canvas.width) {
            this.position.x = this.canvas.width - this.radius;
            this.velocity.x = -this.velocity.x;
        }
        if (this.position.x - this.radius < 0) {
            this.position.x = this.radius;
            this.velocity.x = -this.velocity.x;
        }
    }

    update() {
        this._resolveBorderCollision();
        this.velocity = this.velocity.add(this.acceleration);
        this.velocity = this.velocity.scale(1 - this.friction);
        this.position = this.position.add(this.velocity);
    }
}
