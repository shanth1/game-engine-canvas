import { Vec2 } from "../../utils/Math/Vector.js";
import { drawCircleMixin } from "../Figures/_drawCircleMixin.js";
import { _Object } from "./_Object.js";

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

    _penetrationResolutionWithCircleObject(circleObject) {
        const radiusSum = this.radius + circleObject.radius;
        const distanceVector = circleObject.position.subtract(this.position);
        const penetrationDepth = radiusSum - distanceVector.getMagnitude();
        const penetrationResolution = distanceVector
            .getUnitVector()
            .scale(penetrationDepth / 2);
        this.position = this.position.add(penetrationResolution.scale(-1));
        circleObject.position = circleObject.position.add(
            penetrationResolution,
        );
    }

    resolveCollisionWithCircleObject(circleObject) {
        this._penetrationResolutionWithCircleObject(circleObject);
        const collisionNormal = this.position
            .subtract(circleObject.position)
            .getUnitVector();
        const relativeVelocity = this.velocity.subtract(circleObject.velocity);
        const separatingVelocity = relativeVelocity.dotProduct(collisionNormal);
        const newSepVelocity = -separatingVelocity;
        const separatingVelocityVector = collisionNormal.scale(newSepVelocity);

        this.velocity = this.velocity.add(separatingVelocityVector);
        circleObject.velocity = circleObject.velocity.add(
            separatingVelocityVector.scale(-1),
        );
    }

    checkCollisionWithCircleObject(circleObject) {
        const radiusSum = this.radius + circleObject.radius;
        const distanceVector = circleObject.position.subtract(this.position);
        return radiusSum >= distanceVector.getMagnitude() ? true : false;
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
