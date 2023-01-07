const radius = 20;

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

const clear = () => c.clearRect(0, 0, canvas.width, canvas.height);
