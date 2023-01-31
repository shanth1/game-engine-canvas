export class Rectangle {
    constructor(x, y, width, height, color, roughness = 0.5) {
        this.type = "rectangle";
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        Math.abs(roughness) > 1
            ? (this.roughness = 1)
            : (this.roughness = Math.abs(roughness));
    }

    draw() {
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.width, this.height);
    }
}
