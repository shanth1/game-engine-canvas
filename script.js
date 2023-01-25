import engine from "./gameEngine/engine.js";
import { Game, World, Player, Circle, random } from "./gameEngine/engine.js";

const game = new Game("game_engine", 600, 400);

const world1 = new World(1);
game.addWorld(world1);

const player = new Player(100, 100, 15, 1);
player.keyControlTopDown();

world1.addPlayer(player);

game.start();
