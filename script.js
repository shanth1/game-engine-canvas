import engine from "./gameEngine/engine.js";
import { Game, World, Player, Circle, random } from "./gameEngine/engine.js";

const game = new Game("game_engine", 600, 400);

const world1 = new World(1);
game.addWorld(world1);

const player = new Player(100, 100, 15);
player.keyControlTopDown();

const circle1 = new Circle(200, 250, 40);
const circle2 = new Circle(400, 300, 20);
const circle3 = new Circle(500, 50, 25);

world1.addObjectList([player, circle1, circle2, circle3]);

game.start();
