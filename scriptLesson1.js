const canvas = document.getElementById("lesson_1");

canvas.width = 800;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

c.fillRect(100, 100, 50, 50);
c.fillRect(400, 100, 300, 50);
c.fillRect(200, 200, 200, 200);
c.fillRect(300, 300, 300, 300);
