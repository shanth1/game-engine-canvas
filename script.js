import engine from "./gameEngine/engine.js";
import { Game, Circle, random } from "./gameEngine/engine.js";

const game = new Game("game_engine", 400, 400);
const circle1 = new Circle(20, 100, 200, -2, -5, 1);
const circle2 = new Circle(20, 100, 100, 2, -1);
const arrayOfCircles = [];

// for (let i = 0; i < 10; i++) {
//     arrayOfCircles.push(
//         new Circle(
//             20,
//             random.getRandomPosition(game.canvas, 30)[0],
//             random.getRandomPosition(game.canvas, 30)[1],
//             random.getRandomVelocityVector(1, 2)[0],
//             random.getRandomVelocityVector(3, 5)[1],
//             1,
//         ),
//     );
// }
game.addFigures([circle1, circle2]);
game.addArraysOfFigures([arrayOfCircles]);
game.animate();
