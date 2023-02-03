import { Vec2 } from "../../utils/Math/Vector.js";

export class Rectangle {
    constructor(x, y, width, height, color, roughness = 0.5) {
        this.type = "rectangle";
        this.position = new Vec2(x, y);
        this.width = width;
        this.height = height;
        this.color = color;
        Math.abs(roughness) > 1
            ? (this.roughness = 1)
            : (this.roughness = Math.abs(roughness));
    }

    draw() {
        this.context.fillStyle = this.color;
        this.context.fillRect(
            this.position.x,
            this.position.y,
            this.width,
            this.height,
        );
    }
}
