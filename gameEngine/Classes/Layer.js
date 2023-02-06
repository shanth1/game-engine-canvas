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

    update = () => {
        for (let i = 0; i < this._objects.length; i++) {
            this._objects[i].surfaceList = this._surfaces; //! ???
            this._objects[i].update();
            if (i === this._objects.length - 1) break;

            for (let j = i + 1; j < this._objects.length; j++) {
                const obj1 = this._objects[i];
                const obj2 = this._objects[j];
                if (obj1.checkCollisionWithObject(obj2)) {
                    obj1.resolveCollisionWithObject(obj2);
                }
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
