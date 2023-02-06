import { Vec2 } from "../../utils/Math/Vector.js";
import { Circle } from "../Figures/Circle.js";
import { objectMixins } from "./_objectMixins.js";

export class CylinderObject extends Circle {
    constructor(
        position = new Vec2(0, 0),
        radius = 0,
        color = "black",
        roughness = 0,
        mass = 1,
    ) {
        super(position, radius, color, mass, roughness);
        this.type = "cylinder";

        this.roughness = roughness;
        this.mass = mass;
        this.velocity = new Vec2(0, 0);
        this.acceleration = new Vec2(0, 0);
        this.visibleVectors = false;

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

    update() {
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

// Object.assign(CylinderObject.prototype, objectMixins);
