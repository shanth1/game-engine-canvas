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

class Circle {
    constructor(radius, x, y, dx, dy) {
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
    }

    draw = (context) => {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.stroke();
    };

    update = (canvas) => {
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

const game = new Game("lesson_1", 1000, 600);
const circle1 = new Circle(20, 100, 100, 5, -3);
const circle2 = new Circle(20, 100, 100, 2, 3);
const arrayOfCircles = [];

for (let i = 0; i < 100; i++) {
    arrayOfCircles.push(
        new Circle(
            30,
            getRandomPosition(game.canvas, 30)[0],
            getRandomPosition(game.canvas, 30)[1],
            getRandomVelocityVector(1, 2)[0],
            getRandomVelocityVector(3, 5)[1],
        ),
    );
}
game.addFigures([circle1, circle2]);
game.addArraysOfFigures([arrayOfCircles]);
game.animate();
