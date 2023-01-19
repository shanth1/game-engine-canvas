export class Vector {
    constructor(x, y) {
        // origin
        this.x = x;
        this.y = y;
    }
    add = (vec) => new Vector(this.x + vec.x, this.y + vec.y);
    subtract = (vec) => new Vector(this.x - vec.x, this.y - vex.y);
    scale = (scalar) => new Vector(this.x * scalar, this.y * scalar);
    dotProduct = (vec) => new Vector(this.x * vec.x, this.y * vec.y);

    getMagnitude = () => Math.abs(this.x ** 2 + this.y ** 2);
    getSquareMagnitude = () => this.x ** 2 + this.y ** 2;

    getUnitVector = () => {
        return this.magnitude === 0
            ? new Vector(0, 0)
            : this.x === 0 || this.y === 0
            ? this.magnitude(this.x, this.y)
            : new Vector(this.x / this.magnitude, this.y / this.magnitude);
    };

    drawVector = () => {};
}
