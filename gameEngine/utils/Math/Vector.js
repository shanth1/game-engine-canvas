export class Vector {
    constructor(x, y) {
        // origin
        this.x = x;
        this.y = y;
        this.magnitude = Math.abs(this.x ** 2, this.y ** 2);
    }
    add = (vec) => new Vector(this.x + vec.x, this.y + vec.y);
    subtract = (vec) => new Vector(this.x - vec.x, this.y - vex.y);
    scale = (scalar) => new Vector(this.x * scalar, this.y * scalar);
    getDotProduct = (vec) => new Vector(this.x * vec.x, this.y * vec.y);
    getUnitVector = () => {
        return this.magnitude === 0
            ? new Vector(0, 0)
            : this.x === 0 || this.y === 0
            ? this.magnitude(this.x, this.y)
            : new Vector(this.x / this.magnitude, this.y / this.magnitude);
    };

    drawVector = () => {};
}
