import { _Figure } from "./_Figure.js";
import { drawRectangleMixin } from "./_drawRectangleMixin.js";

export class Rectangle extends _Figure {
    constructor(
        position = new Vec2(0, 0),
        width = 0,
        height = 0,
        color = "black",
    ) {
        super(position, color);
        this.width = width;
        this.height = height;
    }

    get type() {
        return "rectangle";
    }
}
Object.assign(Rectangle.prototype, drawRectangleMixin);
