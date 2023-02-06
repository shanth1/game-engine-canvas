import { Vec2 } from "../../utils/Math/Vector.js";
import { Circle } from "../Figures/Circle.js";
import { objectMixins } from "./_objectMixins.js";

export class SphereObject extends Circle {
    constructor(
        position = new Vec2(0, 0),
        radius = 0,
        color = "black",
        roughness = 0,
        mass = 1,
    ) {
        super(position, radius, color);
        this.type = "sphere";

        this.roughness = roughness;
        this.mass = mass;
        this.velocity = new Vec2(0, 0);
        this.acceleration = new Vec2(0, 0);
        this.visibleVectors = false;
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
// Object.assign(SphereObject.prototype, objectMixins);
