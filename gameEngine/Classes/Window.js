export class Window {
    constructor(id, width = window.innerWidth, height = window.innerHeight) {
        this.canvas = document.getElementById(id);
        this.canvas.width = width;
        this.canvas.height = height;
        this.worldList = [];
    }

    addWorld = (worldObj) => {
        worldObj.canvas = this.canvas;
        worldObj.context = this.canvas.getContext("2d");
        this.worldList.push(worldObj);
    };

    _animate = () => {
        if (this.worldList.length) {
            requestAnimationFrame(this._animate);
            for (let i = 0; i < this.worldList.length; i++) {
                if (!this.worldList[i].visible) continue;
                this.worldList[i].clear();
                this.worldList[i].draw();
                this.worldList[i].update();
            }
        }
    };

    start = () => {
        this._animate();
    };
}
