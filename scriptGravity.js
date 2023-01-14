const canvas_gravity = document.getElementById("gravity");
canvas_gravity.width = 400;
canvas_gravity.height = 500;

const g_ctx = canvas_gravity.getContext("2d");

class CircleGravity {
    constructor(x, y, radius, dx = 0, dy = 0, dv = 0.5) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.dv = dv;
        this.radius = radius;
        this.radiusX = radius;
        this.radiusY = radius;
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

    update = () => {};
}

const circle_gravity = new CircleGravity(canvas_gravity.width / 2, 50, 20);

const animate_gravity = () => {
    requestAnimationFrame(animate_gravity);
    g_ctx.clearRect(0, 0, canvas_gravity.width, canvas_gravity.height);
    circle_gravity.draw();
    circle_gravity.update();
};

animate_gravity();
