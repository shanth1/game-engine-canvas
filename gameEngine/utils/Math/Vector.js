export class Vec2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add = (vec) => new Vector(this.x + vec.x, this.y + vec.y);
    subtract = (vec) => new Vector(this.x - vec.x, this.y - vec.y);
    scale = (scalar) => new Vector(this.x * scalar, this.y * scalar);
    dotProduct = (vec) => this.x * vec.x + this.y * vec.y;
    crossProduct = (vec) => new Vec3(0, 0, this.x * vec.y - this.y * vec.x);

    getStringCoordinates = () => `(${this.x}, ${this.y})`;
    getMagnitude = () => {
        if (this._magnitude !== "undefined") {
            return this._magnitude;
        } else {
            this._magnitude = Math.sqrt(this.x ** 2 + this.y ** 2);
            return this._magnitude;
        }
    };

    getSquareMagnitude = () => {
        if (this._squareMagnitude !== "undefined") {
            return this._squareMagnitude;
        } else {
            this._squareMagnitude = this.x ** 2 + this.y ** 2;
            return this._squareMagnitude;
        }
    };

    getUnitVector = () => {
        return new Vec2(
            this.x / this.getMagnitude(),
            this.y / this.getMagnitude(),
        );
    };

    drawVector = () => {};
}

export class Vec3 extends Vec2 {
    constructor(x, y, z = 0) {
        super(x, y);
        this.z = z;
    }

    add = (vec) => new Vector(this.x + vec.x, this.y + vec.y, this.z + vec.z);
    subtract = (vec) =>
        new Vector(this.x - vec.x, this.y - vex.y, this.z - vec.z);
    scale = (scalar) =>
        new Vector(this.x * scalar, this.y * scalar, this.z * z);
    dotProduct = (vec) => this.x * vec.x + this.y * vec.y + this.z * vec.z;
    crossProduct = (vec) => {
        return new Vec3(
            this.y * vec.z - this.z * vec.y,
            this.x * vec.z - this.z * vec.x,
            this.x * vec.y - this.y * vec.x,
        );
    };

    getStringCoordinates = () => `(${this.x}, ${this.y}), ${this.z})`;

    getMagnitude = () => {
        if (this._magnitude !== "undefined") {
            return this._magnitude;
        } else {
            this._magnitude = Math.sqrt(
                this.x ** 2 + this.y ** 2 + this.z ** 2,
            );
            return this._magnitude;
        }
    };

    getSquareMagnitude = () => {
        if (this._squareMagnitude !== "undefined") {
            return this._squareMagnitude;
        } else {
            this._squareMagnitude = this.x ** 2 + this.y ** 2 + this.z ** 2;
            return this._squareMagnitude;
        }
    };

    getUnitVector = () => {
        return new Vec3(
            this.x / this.getMagnitude(),
            this.y / this.getMagnitude(),
            this.z / this.getMagnitude(),
        );
    };
}
