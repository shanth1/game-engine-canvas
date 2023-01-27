export class World {
    constructor(gravity = 0, visible = true) {
        this.gravity = gravity;
        this.visible = visible;
        this._objects = [];
    }

    addLight = () => {};

    addObject(object) {
        this._objects.push(object);
    }

    addObjectList(objectList) {
        this._objects.push(...objectList);
    }

    addArrayOfObjectList(arrays) {
        arrays.map((objectList) => {
            this._objects.push(...objectList);
        });
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    update = () => {
        if (this._objects.length >= 2) {
            for (let i = 0; i < this._objects.length - 1; i++) {
                for (let j = i + 1; j < this._objects.length; j++) {
                    if (
                        !this._checkCollision(
                            this._objects[i],
                            this._objects[j],
                        )
                    )
                        continue;

                    console.log(i, j);
                }
            }
        }
    };

    _penetrationResolution = (obj1, obj2, radiusSum, distanceVector) => {
        const penetrationDepth = radiusSum - distanceVector.getMagnitude();
        const penetrationResolution = distanceVector
            .getUnitVector()
            .scale(penetrationDepth / 2);
        obj1.position = obj1.position.add(penetrationResolution.scale(-1));
        obj2.position = obj2.position.add(penetrationResolution);
    };

    _checkCollision = (obj1, obj2) => {
        const distanceVector = obj2.position.subtract(obj1.position);
        const radiusSum = obj1.radius + obj2.radius;
        if (radiusSum >= distanceVector.getMagnitude()) {
            this._penetrationResolution(obj1, obj2, radiusSum, distanceVector);
            return true;
        } else {
            return false;
        }
    };

    draw() {
        if (this._objects.length) {
            this._objects.forEach((object) => {
                object.gravity = this.gravity;
                object.canvas = this.canvas;
                object.context = this.context;
                object.draw();
                object.update();
            });
        }
    }
}
