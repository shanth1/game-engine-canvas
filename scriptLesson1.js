const canvas = document.getElementById("lesson_1");

canvas.width = 800;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

c.fillStyle = "#48D1CC";
c.fillRect(100, 100, 50, 50);
c.fillStyle = "#00fa9a";
c.fillRect(400, 100, 300, 50);
c.fillRect(200, 200, 200, 200);
c.fillStyle = "rgba(255, 0, 0, 0.5)";
c.fillRect(300, 300, 300, 300);

c.beginPath();
c.moveTo(50, 500);
c.lineTo(100, 100);
c.lineTo(300, 200);
c.lineTo(600, 300);
c.lineTo(600, 600);
c.lineTo(700, 600);
c.stroke();
