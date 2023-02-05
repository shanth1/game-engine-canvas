import { Vec2 } from "../../utils/Math/Vector.js";
import { Figure } from "./_Figure.js";

export class Circle extends Figure {
    constructor(position = new Vec2(0, 0), radius = 0, color = "black") {
        super(position, color);
        this.type = "circle";
        this.radius = radius;
    }

    draw() {
        super.draw(() => {
            this.context.arc(
                this.position.x,
                this.position.y,
                this.radius,
                0,
                2 * Math.PI,
            );
        });
    }
}
