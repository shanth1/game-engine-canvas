import { _Object } from "./_Object.js";
import { Vec2 } from "../../utils/Math/Vector.js";
import { drawRectangleMixin } from "../Figures/_drawRectangleMixin.js";

export class CuboidObject extends _Object {
    constructor(
        position = new Vec2(0, 0),
        width = 0,
        height = 0,
        color = "black",
        roughness = 0,
        mass = 0,
    ) {
        super(position, color, roughness, mass);
        this.type = "cuboid";
        this.width = width;
        this.height = height;
    }
}

Object.assign(CuboidObject.prototype, drawRectangleMixin);
