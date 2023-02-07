import { Vec2 } from "../../utils/Math/Vector.js";
import { RoundObject } from "./_RoundObject.js";

export class SphereObject extends RoundObject {
    constructor(
        position = new Vec2(0, 0),
        radius = 0,
        color = "black",
        roughness = 0,
        mass = 1,
    ) {
        super(position, radius, color, roughness, mass);
    }

    get type() {
        return "sphere";
    }
}
