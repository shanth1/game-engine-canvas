export const getRandomNumberOfRange = (min, max) =>
    Math.random() * (max - min) + min;

export const getRandomSign = () => (Math.random() < 0.5 ? -1 : 1);

export const getRandomVelocityVector = (min, max) => [
    getRandomSign() * getRandomNumberOfRange(min, max),
    getRandomSign() * getRandomNumberOfRange(min, max),
];

export const getRandomPosition = (canvas, radius) => [
    radius + Math.random() * (canvas.width - 2 * radius),
    radius + Math.random() * (canvas.height - 2 * radius),
];
