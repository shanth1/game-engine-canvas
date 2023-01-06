const canvas = document.getElementById("lesson_1");

canvas.width = window.innerWidth * 0.8;
canvas.height = 600;

const c = canvas.getContext("2d");

const radius = 20;
let x = radius + Math.random() * (canvas.width - 2 * radius);
let y = radius + Math.random() * (canvas.height - 2 * radius);
let dx = Math.random() < 0.5 ? -Math.random() * 4 - 2 : Math.random() * 4 + 2;
let dy = Math.random() < 0.5 ? -Math.random() * 4 - 2 : Math.random() * 4 + 2;

const clear = () => c.clearRect(0, 0, canvas.width, canvas.height);

const animate = () => {
    requestAnimationFrame(animate);
    clear();

    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2);
    c.stroke();

    if (y + radius > canvas.height || y - radius < 0) {
        dy = -dy;
    }

    if (x + radius > canvas.width || x - radius < 0) {
        dx = -dx;
    }

    x += dx;
    y += dy;
};

animate();
