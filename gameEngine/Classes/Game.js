export class Game {
    constructor(id, width = window.innerWidth, height = window.innerHeight) {
        this.canvas = document.getElementById(id);
        this.context = this.canvas.getContext("2d");
        this.canvas.width = width;
        this.canvas.height = height;

        this._figures = [];
    }

    addFigures(figures) {
        this._figures.push(...figures);
    }

    addArraysOfFigures(arrays) {
        arrays.map((figures) => {
            this._figures.push(...figures);
        });
    }

    _workWithFigures(figures) {
        if (figures.length) {
            figures.map((figure) => {
                figure.draw(this.context);
                figure.update(this.canvas);
            });
        }
    }

    _clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    draw() {
        this._workWithFigures(this._figures);
    }

    animate = () => {
        requestAnimationFrame(this.animate);
        this._clear();
        this.draw();
    };
}
