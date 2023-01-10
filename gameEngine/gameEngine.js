const getRandomNumberOfRange = (min, max) => Math.random() * (max - min) + min;

const getRandomSign = () => (Math.random() < 0.5 ? -1 : 1);

const getRandomVelocityVector = (min, max) => [
    getRandomSign() * getRandomNumberOfRange(min, max),
    getRandomSign() * getRandomNumberOfRange(min, max),
];

const getRandomPosition = (canvas, radius) => [
    radius + Math.random() * (canvas.width - 2 * radius),
    radius + Math.random() * (canvas.height - 2 * radius),
];

class Game {
    constructor(id, width = window.innerWidth, height = window.innerHeight) {
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = width;
        this.canvas.height = height;
    }

    _workWithFigures(figures) {
        if (figures.length) {
            figures.map((figure) => {
                figure.draw();
                figure.update();
            });
        }
    }

    _clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    animate = (figures = [], arraysOfFigures = [[]]) => {
        requestAnimationFrame(this.animate);
        this._clear();
        this._workWithFigures(figures);

        arraysOfFigures.map((figures) => {
            this._workWithFigures(figures);
        });
    };
}

const canvas = new Game("lesson_1", 800, 600);
canvas.animate();

class Circle {
    constructor(
        radius,
        filled = false,
        [x, y] = getRandomPosition(canvas, radius),
        [dx, dy] = getRandomVelocityVector(2, 4),
    ) {
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.filled = filled;
    }

    draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.stroke();
        if (this.filled) c.fill();
    };

    update = () => {
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        this.x += this.dx;
        this.y += this.dy;
    };
}
