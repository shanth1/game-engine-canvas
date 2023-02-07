import { RoundObject } from "./_RoundObject.js";
import { Vec2 } from "../../utils/Math/Vector.js";

export class CylinderObject extends RoundObject {
    constructor(
        position = new Vec2(0, 0),
        radius = 0,
        color = "black",
        roughness = 0,
        mass = 1,
    ) {
        super(position, radius, color, roughness, mass);

        this.surfaceList = [];
        this.surfaceRoughness = 0;
    }

    get type() {
        return "cylinder";
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
}
