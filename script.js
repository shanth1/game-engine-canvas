import engine from "./gameEngine/engine.js";
import { Game, Circle, random } from "./gameEngine/engine.js";
import { World } from "./gameEngine/engine.js";

const game = new Game("game_engine", 600, 400);

const world1 = new World(true, 1);
game.addWorld(world1);

const circle1 = new Circle(100, 100, 10, 0, 0, 0);
world1.addObject(circle1);

game.start();
