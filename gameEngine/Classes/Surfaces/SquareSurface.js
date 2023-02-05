import { Vec2 } from "../../utils/Math/Vector";
import { Square } from "../Figures/Square.js";
import { surfaceMixins } from "./_surfaceMixins.js";

export class SquareSurface extends Square {
    constructor(position = new Vec2(0, 0), width = 0, color = "black") {
        super(position, width, color);
    }
}
