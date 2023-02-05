export class Layer {
    constructor(gravity = new Vec2(0, 0), visible = true) {
        this.gravity = gravity;
        this.visible = visible;

        this._objects = [];
        this._surfaces = [];
    }

    addLight = () => {};

    _initObject(object) {
        object.gravity = this.gravity;
        object.canvas = this.canvas;
        object.context = this.context;

        object.friction = 0.05;
    }

    addObject(object) {
        this._initObject(object);
        this._objects.push(object);
    }

    addSurface(figure2d) {
        this._initObject(figure2d);
        this._surfaces.push(figure2d);
    }

    addObjectList(objectList) {
        objectList.forEach((object) => this._initObject(object));
        this._objects.push(...objectList);
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    _checkCollision = (radiusSum, distanceVector) => {
        return radiusSum >= distanceVector.getMagnitude() ? true : false;
    };

    _penetrationResolution = (obj1, obj2, radiusSum, distanceVector) => {
        const penetrationDepth = radiusSum - distanceVector.getMagnitude();
        const penetrationResolution = distanceVector
            .getUnitVector()
            .scale(penetrationDepth / 2);
        obj1.position = obj1.position.add(penetrationResolution.scale(-1));
        obj2.position = obj2.position.add(penetrationResolution);
    };

    _resolveCollision = (obj1, obj2) => {
        const collisionNormal = obj1.position
            .subtract(obj2.position)
            .getUnitVector();
        const relativeVelocity = obj1.velocity.subtract(obj2.velocity);
        const separatingVelocity = relativeVelocity.dotProduct(collisionNormal);
        const newSepVelocity = -separatingVelocity;
        const separatingVelocityVector = collisionNormal.scale(newSepVelocity);

        obj1.velocity = obj1.velocity.add(separatingVelocityVector);
        obj2.velocity = obj2.velocity.add(separatingVelocityVector.scale(-1));
    };

    _changeFrictionCoefficient() {}

    _updateCoupleOfObjects() {}

    update = () => {
        for (let i = 0; i < this._objects.length; i++) {
            this._objects[i].surfaceList = this._surfaces;
            this._objects[i].update();
            if (i === this._objects.length - 1) break;

            for (let j = i + 1; j < this._objects.length; j++) {
                const obj1 = this._objects[i];
                const obj2 = this._objects[j];
                const radiusSum = obj1.radius + obj2.radius;
                const distanceVector = obj2.position.subtract(obj1.position);
                if (!this._checkCollision(radiusSum, distanceVector)) continue;
                this._penetrationResolution(
                    obj1,
                    obj2,
                    radiusSum,
                    distanceVector,
                );
                this._resolveCollision(obj1, obj2);
            }
        }
    };

    draw() {
        if (this._surfaces.length) {
            this._surfaces.forEach((surface) => {
                surface.draw();
            });
        }
        if (this._objects.length) {
            this._objects.forEach((object) => {
                object.draw();
            });
        }
    }
}
