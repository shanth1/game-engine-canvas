const canvas = document.getElementById("lesson_1");

canvas.width = window.innerWidth * 0.8;
canvas.height = 600;

const c = canvas.getContext("2d");

let x = 100;

const clear = () => c.clearRect(0, 0, innerWidth, innerHeight);

const animate = () => {
    requestAnimationFrame(animate);
    clear();

    c.beginPath();
    c.arc(x, canvas.height / 2, 20, 0, Math.PI * 2);
    c.stroke();

    x += 1;
};

animate();
