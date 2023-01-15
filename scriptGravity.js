const canvas_gravity = document.getElementById("gravity");
canvas_gravity.width = 400;
canvas_gravity.height = 500;

const g_ctx = canvas_gravity.getContext("2d");

class CircleGravity {
    constructor(x, y, radius, friction = 0.2, dx = 0, dy = 2, gravity = 1) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.acc_x = 0;
        this.acc_y = 0;
        this.radius = radius;
        this.radiusX = radius;
        this.radiusY = radius;
        this.friction = friction;
        this.g = gravity;
    }

    draw = () => {
        g_ctx.beginPath();
        g_ctx.ellipse(
            this.x,
            this.y,
            this.radiusX,
            this.radiusX,
            0,
            0,
            2 * Math.PI,
        );
        g_ctx.fill();
    };

    update = () => {
        if (this.y + this.radius >= canvas_gravity.height) {
            this.dy = -this.dy * (1 - this.friction);
            this.acc_y = 0;
        }

        if (this.y + this.radius + this.dy < canvas_gravity.height) {
            this.dy += this.acc_y;
            this.y += this.dy;
        } else {
            this.y = canvas_gravity.height - this.radius;
        }
        this.acc_y = this.g;
    };
}

const circle_gravity = new CircleGravity(canvas_gravity.width / 2, 50, 30, 0.2);

const animate_gravity = () => {
    requestAnimationFrame(animate_gravity);
    g_ctx.clearRect(0, 0, canvas_gravity.width, canvas_gravity.height);
    circle_gravity.draw();
    circle_gravity.update();
};

animate_gravity();
