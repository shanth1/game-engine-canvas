import { Vec2 } from "../../utils/Math/Vector.js";
import { _Surface } from "./_Surface.js";
import { drawRectangleMixin } from "../Figures/_drawRectangleMixin.js";

export class RectangleSurface extends _Surface {
    constructor(
        position = new Vec2(0, 0),
        width = 0,
        height = 0,
        color = "black",
        roughness = 0.1,
    ) {
        super(position, color, roughness);
        this.type = "rectangle";
        this.width = width;
        this.height = height;
    }
}
Object.assign(RectangleSurface.prototype, drawRectangleMixin);
