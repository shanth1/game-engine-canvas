export const roundObjectMixin = {
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
    },

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
    },

    checkCollisionWithCircleObject(circleObject) {
        const radiusSum = this.radius + circleObject.radius;
        const distanceVector = circleObject.position.subtract(this.position);
        return radiusSum >= distanceVector.getMagnitude() ? true : false;
    },
};
