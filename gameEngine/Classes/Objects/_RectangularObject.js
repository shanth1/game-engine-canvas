import { Vec2 } from "../../utils/Math/Vector";
import { drawRectangleMixin } from "../Figures/_drawRectangleMixin";
import { _Object } from "./_Object";

export class RectangularObject extends _Object {
    constructor(
        position = new Vec2(),
        width = 0,
        height = 0,
        color = "black",
        roughness = 0,
        mass = 1,
    ) {
        super(position, color, roughness, mass);
        this.width = width;
        this.height = height;
    }
}
Object.assign(RectangularObject.prototype, drawRectangleMixin);
