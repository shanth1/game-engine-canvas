import { Vec2 } from "../../utils/Math/Vector.js";
import { Rectangle } from "./Rectangle.js";

export class Square extends Rectangle {
    constructor(position = new Vec2(0, 0), width = 0, color = "black") {
        super(position, width, width, color);
    }
}
