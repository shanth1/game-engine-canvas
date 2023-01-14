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
    constructor(radius, x, y, dx, dy, elasticity = 0) {
        this._minRadius = radius * (1 - elasticity / 4);
        this._maxRadius = radius;
        this._radiusX = this._maxRadius;
        this._radiusY = this._maxRadius;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
    }

    draw = (context) => {
        context.beginPath();
        context.ellipse(
            this.x,
            this.y,
            this._radiusX,
            this._radiusY,
            0,
            0,
            2 * Math.PI,
        );
        context.stroke();
    };

    update = (canvas) => {
        // Up
        if (this.y - this._maxRadius < 0 && this.dy < 0) {
            this._radiusY -= Math.abs(this.dy);
        }
        if (this.y - this._maxRadius <= 0 && this.dy > 0) {
            this._radiusY += Math.abs(this.dy);
        }
        if (this.y - this._minRadius < 0) {
            this.dy = -this.dy;
        }

        // Down
        if (this.y + this._maxRadius > canvas.height && this.dy > 0) {
            this._radiusY -= Math.abs(this.dy);
        }
        if (this.y + this._maxRadius >= canvas.height && this.dy < 0) {
            this._radiusY += Math.abs(this.dy);
        }
        if (this.y + this._minRadius > canvas.height) {
            this.dy = -this.dy;
        }

        // Left
        if (this.x - this._maxRadius < 0 && this.dx < 0) {
            this._radiusX -= Math.abs(this.dx);
        }
        if (this.x - this._maxRadius <= 0 && this.dx > 0) {
            this._radiusX += Math.abs(this.dx);
        }
        if (this.x - this._minRadius < 0) {
            this.dx = -this.dx;
        }

        // Right
        if (this.x + this._maxRadius > canvas.width && this.dx > 0) {
            this._radiusX -= Math.abs(this.dx);
        }
        if (this.x + this._maxRadius >= canvas.width && this.dx < 0) {
            this._radiusX += Math.abs(this.dx);
        }
        if (this.x + this._minRadius > canvas.width) {
            this.dx = -this.dx;
        }

        this.x += this.dx;
        this.y += this.dy;
    };
}

const game = new Game("game_engine", 400, 400);
const circle1 = new Circle(20, 100, 200, -2, -5, 1);
const circle2 = new Circle(20, 100, 100, 2, -1);
const arrayOfCircles = [];

// for (let i = 0; i < 10; i++) {
//     arrayOfCircles.push(
//         new Circle(
//             20,
//             getRandomPosition(game.canvas, 30)[0],
//             getRandomPosition(game.canvas, 30)[1],
//             getRandomVelocityVector(1, 2)[0],
//             getRandomVelocityVector(3, 5)[1],
//             1,
//         ),
//     );
// }
game.addFigures([circle1, circle2]);
game.addArraysOfFigures([arrayOfCircles]);
game.animate();
