import { Vec2 } from "../../utils/Math/Vector.js";
import { Rectangle } from "../Figures/Rectangle.js";
import { surfaceMixins } from "./_surfaceMixins.js";

export class RectangleSurface extends Rectangle {
    constructor(
        position = new Vec2(0, 0),
        width = 0,
        height = 0,
        color = "black",
        roughness = 0.1,
    ) {
        super(position, width, height, color);
        this.type = "rectangle";
        this.roughness = roughness;
    }
}
