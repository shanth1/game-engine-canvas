const canvas = document.getElementById("lesson_1");

canvas.width = window.innerWidth * 0.6;
canvas.height = 600;

canvas.x = canvas.getBoundingClientRect().left;
canvas.y = canvas.getBoundingClientRect().top;

const c = canvas.getContext("2d");

const clear = () => c.clearRect(0, 0, canvas.width, canvas.height);

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

const mouse = {
    x: undefined,
    y: undefined,
};

const colorArray = ["#0081A7", "#00AFB9", "#FDFCDC", "#FED9B7", "#F07167"];

const maxRadius = 40;

window.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

class Circle {
    constructor(
        radius,
        [x, y] = getRandomPosition(canvas, radius),
        [dx, dy] = getRandomVelocityVector(1, 2),
    ) {
        this.radius = radius;
        this.minRadius = radius;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    }

    draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();
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

        if (
            Math.abs(mouse.x - (this.x + canvas.x)) < 50 &&
            Math.abs(mouse.y - (this.y + canvas.y)) < 50
        ) {
            if (this.radius < maxRadius) {
                this.radius += 2;
            }
        } else {
            if (this.radius > this.minRadius) {
                this.radius -= 2;
            }
        }
    };
}

const circleArray = [];

for (let i = 0; i < 1000; i++) {
    circleArray.push(new Circle(Math.random() * 5 + 5));
}

const animate = () => {
    requestAnimationFrame(animate);
    clear();
    circleArray.map((circle) => {
        circle.draw();
        circle.update();
    });
};

animate();
