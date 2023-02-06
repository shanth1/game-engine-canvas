import { Vec2 } from "../../utils/Math/Vector.js";

export class _Figure {
    constructor(position = new Vec2(0, 0), color = "black") {
        this.position = position;
        this.color = color;
    }
}
