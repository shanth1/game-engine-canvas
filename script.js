import engine from "./gameEngine/engine.js";
import { Game, Circle, random } from "./gameEngine/engine.js";
import { World } from "./gameEngine/engine.js";

const game = new Game("game_engine", 600, 400);

const world1 = new World(true);
game.addWorld(world1);

const circle1 = new Circle(5, 100, 100, 1, 2);
const circle2 = new Circle(5, 100, 100, -1, 2);
const circle3 = new Circle(10, 100, 100, 1, 2);
const circle4 = new Circle(15, 100, 100, -1, 2);
world1.addArrayOfObjectList([
    [circle1, circle2],
    [circle3, circle4],
]);

game.start();
