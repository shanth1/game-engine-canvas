import { Figure } from "./_Figure.js";

export class Rectangle extends Figure {
    constructor(
        position = new Vec2(0, 0),
        width = 0,
        height = 0,
        color = "black",
    ) {
        super(position, color);
        this.type = "rectangle";
        this.width = width;
        this.height = height;
    }

    draw() {
        super.draw(() => {
            this.context.fillRect(
                this.position.x,
                this.position.y,
                this.width,
                this.height,
            );
        });
    }
}
