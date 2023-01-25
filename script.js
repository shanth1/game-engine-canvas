import engine from "./gameEngine/engine.js";
import { Game, World, Player, Circle, random } from "./gameEngine/engine.js";

const game = new Game("game_engine", 600, 400);

const world1 = new World(0);
game.addWorld(world1);

const player = new Player(100, 100, 15, 5);
player.keyControlTopDown();

world1.addPlayer(player);

game.start();
