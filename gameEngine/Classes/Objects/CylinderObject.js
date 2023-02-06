import { Vec2 } from "../../utils/Math/Vector.js";
import { drawCircleMixin } from "../Figures/_drawCircleMixin.js";
import { _Object } from "./_Object.js";
import { roundObjectMixin } from "./_roundObjectsMixin.js";

export class CylinderObject extends _Object {
    constructor(
        position = new Vec2(0, 0),
        radius = 0,
        color = "black",
        roughness = 0,
        mass = 1,
    ) {
        super(position, color, roughness, mass);
        this.type = "cylinder";
        this.radius = radius;

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
}
Object.assign(CylinderObject.prototype, drawCircleMixin);
Object.assign(CylinderObject.prototype, roundObjectMixin);
