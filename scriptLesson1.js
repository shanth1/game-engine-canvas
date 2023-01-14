const canvas_lsn1 = document.getElementById("lesson_1");

const c = canvas_lsn1.getContext("2d");

const clear = () => c.clearRect(0, 0, canvas_lsn1.width, canvas_lsn1.height);

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

window.addEventListener("resize", () => {
    setSize();
    init();
});

window.addEventListener("scroll", () => {
    setSize();
});

const setSize = () => {
    canvas_lsn1.width = canvas_lsn1.offsetWidth;
    canvas_lsn1.height = canvas_lsn1.offsetHeight;
    canvas_lsn1.x = canvas_lsn1.getBoundingClientRect().left;
    canvas_lsn1.y = canvas_lsn1.getBoundingClientRect().top;
};

setSize();

class Circle_lsn1 {
    constructor(
        radius,
        [x, y] = getRandomPosition(canvas_lsn1, radius),
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
        if (
            this.y + this.radius > canvas_lsn1.height ||
            this.y - this.radius < 0
        ) {
            this.dy = -this.dy;
        }
        if (
            this.x + this.radius > canvas_lsn1.width ||
            this.x - this.radius < 0
        ) {
            this.dx = -this.dx;
        }

        this.x += this.dx;
        this.y += this.dy;

        if (
            Math.abs(mouse.x - (this.x + canvas_lsn1.x)) < 50 &&
            Math.abs(mouse.y - (this.y + canvas_lsn1.y)) < 50
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

let circleArray = [];

const init = () => {
    circleArray = [];
    for (let i = 0; i < 1000; i++) {
        circleArray.push(new Circle_lsn1(Math.random() * 5 + 5));
    }
};

const animate = () => {
    requestAnimationFrame(animate);
    clear();
    circleArray.map((circle) => {
        circle.draw();
        circle.update();
    });
};

init();
animate();
