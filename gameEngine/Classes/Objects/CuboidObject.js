import { _Object } from "./_Object.js";
import { Vec2 } from "../../utils/Math/Vector.js";
import { RectangularObject } from "./_RectangularObject.js";

export class CuboidObject extends RectangularObject {
    constructor(
        position = new Vec2(0, 0),
        width = 0,
        height = 0,
        color = "black",
        roughness = 0,
        mass = 0,
    ) {
        super(position, width, height, color, roughness, mass);
    }

    get type() {
        return "cuboid";
    }
}
