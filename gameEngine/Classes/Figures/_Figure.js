import { Vec2 } from "../../utils/Math/Vector.js";

export class Figure {
    constructor(position = new Vec2(0, 0), color = "black") {
        this.position = position;
        this.color = color;
    }

    draw(drawingFunction) {
        try {
            this.context.beginPath();
            this.context.fillStyle = this.color;
            drawingFunction();
            this.context.fill();
        } catch (error) {
            console.log(error);
        }
    }
}
