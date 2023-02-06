export class Window {
    constructor(
        id = "",
        width = window.innerWidth,
        height = window.innerHeight,
    ) {
        this.canvas = document.getElementById(id);
        this.canvas.width = width;
        this.canvas.height = height;
        this.layerList = [];
    }

    addWorld = (layerObject) => {
        layerObject.canvas = this.canvas;
        layerObject.context = this.canvas.getContext("2d");
        this.layerList.push(layerObject);
    };

    _animate = () => {
        if (this.layerList.length) {
            requestAnimationFrame(this._animate);
            for (let index = 0; index < this.layerList.length; index++) {
                if (!this.layerList[index].visible) continue;
                this.layerList[index].clear();
                this.layerList[index].draw();
                this.layerList[index].update();
            }
        }
    };

    start = () => {
        this._animate();
    };
}
