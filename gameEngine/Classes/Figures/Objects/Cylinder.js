import { Vec2 } from "../../../utils/Math/Vector.js";
import { Circle } from "../../Surfaces/CircleSurface.js";

export class Cylinder extends Circle {
    constructor(
        position = new Vec2(0, 0),
        radius = 0,
        color = "black",
        mass = 0,
        roughness = 0,
    ) {
        super(position, radius, color, mass, roughness);
        this.type = "cylinder";

        this.surfaceList = [];
        this.surfaceRoughness = 0;
    }

    _detectCollisionWithRectangle(rectangle) {
        //* Closest point of rectangle for a circle
        const closestPointOfRectangle = new Vec2(
            this.position.x,
            this.position.y,
        );

        const clamp = (min, max, val) => {
            if (val < min) {
                return min;
            } else if (val > max) {
                return max;
            } else {
                return val;
            }
        };

        closestPointOfRectangle.x = clamp(
            rectangle.position.x,
            rectangle.position.x + rectangle.width,
            this.position.x,
        );
        closestPointOfRectangle.y = clamp(
            rectangle.position.y,
            rectangle.position.y + rectangle.height,
            this.position.y,
        );

        const distance = this.position
            .subtract(closestPointOfRectangle)
            .getMagnitude();

        if (distance < this.radius) {
            return true;
        } else {
            return false;
        }
    }

    _getTypeOfRectangleCollision(rectangle) {
        if (
            this.position.x - this.radius > rectangle.position.x &&
            this.position.x + this.radius <
                rectangle.position.x + rectangle.width &&
            this.position.y - this.radius > rectangle.position.y &&
            this.position.y + this.radius <
                rectangle.position.y + rectangle.height
        ) {
            return "entirely";
        } else if (this._detectCollisionWithRectangle(rectangle)) {
            return "partially";
        } else {
            return false;
        }
    }

    _getSurfaceRoughness(surfaceList) {
        this.otherCollision = false;
        for (let i = surfaceList.length - 1; i >= 0; i--) {
            switch (surfaceList[i].type) {
                case "rectangle":
                    const collision = this._getTypeOfRectangleCollision(
                        surfaceList[i],
                    );
                    if (collision === "partially") {
                        this.otherCollision = true;
                        if (this.surfaceRoughness < surfaceList[i].roughness) {
                            this.surfaceRoughness = surfaceList[i].roughness;
                        }
                    } else if (collision === "entirely") {
                        if (!this.otherCollision) {
                            this.otherCollision = false;
                            this.surfaceRoughness = surfaceList[i].roughness;
                            return;
                        } else {
                            if (
                                this.surfaceRoughness < surfaceList[i].roughness
                            ) {
                                this.surfaceRoughness =
                                    surfaceList[i].roughness;
                            }
                        }
                    } else {
                        this.otherCollision = false;
                        this.surfaceRoughness = 0;
                    }
                    break;
            }
        }
    }

    _resolveBorderCollision() {
        if (this.position.y + this.radius > this.canvas.height) {
            this.position.y = this.canvas.height - this.radius;
            this.velocity.y = -this.velocity.y;
        }
        if (this.position.y - this.radius < 0) {
            this.position.y = this.radius;
            this.velocity.y = -this.velocity.y;
        }
        if (this.position.x + this.radius > this.canvas.width) {
            this.position.x = this.canvas.width - this.radius;
            this.velocity.x = -this.velocity.x;
        }
        if (this.position.x - this.radius < 0) {
            this.position.x = this.radius;
            this.velocity.x = -this.velocity.x;
        }
    }

    update() {
        this._resolveBorderCollision();

        this._getSurfaceRoughness(this.surfaceList);
        this.velocity = this.velocity.add(this.acceleration);

        console.log(this.surfaceRoughness);
        if (this.surfaceRoughness !== 0) {
            this.frictionCoefficient =
                (this.surfaceRoughness + this.roughness) / 2;
            this.friction = this.frictionCoefficient;
            this.velocity = this.velocity.scale(1 - this.friction);
        }
        this.position = this.position.add(this.velocity);
    }
}
