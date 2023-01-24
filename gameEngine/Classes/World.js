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

    draw() {
        if (this._objects.length) {
            this._objects.map((object) => {
                object.gravity = this.gravity;
                object.draw(this.context);
                object.update(this.canvas);
            });
        }
    }
}
