import { Vec2 } from "../../utils/Math/Vector.js";
import { drawCircleMixin } from "../Figures/_drawCircleMixin.js";
import { _Object } from "./_Object.js";

export class SphereObject extends _Object {
    constructor(
        position = new Vec2(0, 0),
        radius = 0,
        color = "black",
        roughness = 0,
        mass = 1,
    ) {
        super(position, color, roughness, mass);
        this.type = "sphere";
        this.radius = radius;
    }
}
Object.assign(SphereObject.prototype, drawCircleMixin);
