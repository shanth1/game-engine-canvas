const canvas = document.getElementById("lesson_1");

canvas.width = window.innerWidth * 0.8;
canvas.height = 600;

const c = canvas.getContext("2d");

let x = 100;

const animate = () => {
    requestAnimationFrame(animate);

    c.beginPath();
    c.arc(x, canvas.height / 2, 20, 0, Math.PI * 2);
    c.stroke();

    x += 1;
};

animate();
