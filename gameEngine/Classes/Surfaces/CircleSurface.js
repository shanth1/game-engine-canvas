import { Vec2 } from "../../utils/Math/Vector.js";
import { Circle } from "../Figures/Circle.js";
import { surfaceMixins } from "./_surfaceMixins.js";

export class CircleSurface extends Circle {
    constructor(position = new Vec2(0, 0), radius = 0, color = "black") {
        super(position, radius, color);
    }
}
