import { _Figure } from "../Figures/_Figure.js";
import { Vec2 } from "../../utils/Math/Vector.js";

export class _Surface extends _Figure {
    constructor(position = new Vec2(0, 0), color = "black", roughness = 0) {
        super(position, color);
        this.roughness = roughness;
    }
}
