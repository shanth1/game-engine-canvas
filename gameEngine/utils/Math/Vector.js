export class Vec2 {
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
        return this.x === 0 || this.y === 0
            ? Math.max(this.x, this.y)
            : new Vector(this.x / this.magnitude, this.y / this.magnitude);
    };

    drawVector = () => {};
}

export class Vec3 extends Vec2 {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }

    add = (vec) => new Vector(this.x + vec.x, this.y + vec.y, this.z + vec.z);
    subtract = (vec) =>
        new Vector(this.x - vec.x, this.y - vex.y, this.z - vec.z);
    scale = (scalar) =>
        new Vector(this.x * scalar, this.y * scalar, this.z * z);
    dotProduct = (vec) =>
        new Vector(this.x * vec.x, this.y * vec.y, this.z * vec.z);

    getMagnitude = () => Math.abs(this.x ** 2 + this.y ** 2 + this.z ** 2);
    getSquareMagnitude = () => this.x ** 2 + this.y ** 2 + this.z ** 2;

    getUnitVector = () =>
        new Vector(this.x / this.magnitude, this.y / this.magnitude);
}
