import { Vec2 } from "../../utils/Math/Vector.js";
import { drawCircleMixin } from "./_drawCircleMixin.js";
import { _Figure } from "./_Figure.js";

export class Circle extends _Figure {
    constructor(position = new Vec2(0, 0), radius = 0, color = "black") {
        super(position, color);
        this.type = "circle";
        this.radius = radius;
    }
}
Object.assign(Circle.prototype, drawCircleMixin);
