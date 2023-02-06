import { _Surface } from "./_Surface.js";
import { Vec2 } from "../../utils/Math/Vector.js";
import { drawCircleMixin } from "../Figures/_drawCircleMixin.js";

export class CircleSurface extends _Surface {
    constructor(
        position = new Vec2(0, 0),
        radius = 0,
        color = "black",
        roughness,
    ) {
        super(position, color, roughness);
        this.type = "circle";
        this.radius = radius;
    }
}
Object.assign(CircleSurface.prototype, drawCircleMixin);
