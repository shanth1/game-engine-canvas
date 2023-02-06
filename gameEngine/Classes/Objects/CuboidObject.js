import { Vec2 } from "../../utils/Math/Vector.js";
import { Rectangle } from "../Figures/Rectangle.js";
import { objectMixins } from "./_objectMixins.js";

export class CuboidObject extends Rectangle {
    constructor(
        position = new Vec2(0, 0),
        width = 0,
        height = 0,
        color = "black",
        roughness = 0,
        mass = 0,
    ) {
        super(position, width, height, color);
        this.type = "cuboid";

        this.roughness = roughness;
        this.mass = mass;
        this.velocity = new Vec2(0, 0);
        this.acceleration = new Vec2(0, 0);
        this.visibleVectors = false;
    }

    update() {
        // this._resolveBorderCollision();
        this.velocity = this.velocity.add(this.acceleration);
        this.velocity = this.velocity.scale(1 - this.friction);
        this.position = this.position.add(this.velocity);
    }
}
// Object.assign(CuboidObject.prototype, objectMixins);
