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
c.strokeStyle = "rgba(0, 0, 200, 0.5)";
c.stroke();

x = canvas.width / 2;
y = canvas.height / 2;
radius = 100;
startAngle = 0;
endAngle = Math.PI / 2;
counterclockwise = false;
c.beginPath(); // Separate lines
c.arc(x, y, radius, startAngle, endAngle, counterclockwise);
c.strokeStyle = "green";
c.stroke();
