import { Cylinder } from "./gameEngine/Classes/Figures/Cylinder.js";
import { Rectangle } from "./gameEngine/Classes/Figures/Rectangle.js";
import { Game, World, Player, Sphere, random } from "./gameEngine/engine.js";

const game = new Game("game_engine", 600, 400);

const world1 = new World(1, true, 0.01);
game.addWorld(world1);

const surf1 = new Rectangle(100, 100, 200, 300, "red");
const surf2 = new Rectangle(100, 100, 200, 300, "red", 0.8);
const surf3 = new Rectangle(100, 100, 200, 300, "red", 0.1);

world1.addSurface(surf1);
world1.addSurface(surf2);
world1.addSurface(surf3);

const player = new Player(100, 100, 15, 0.1);
player.keyControlTopDown();

const circle1 = new Sphere(200, 250, 40);
const circle2 = new Sphere(400, 300, 20);
const circle3 = new Sphere(500, 50, 25);

const cyl1 = new Cylinder(200, 100, 30, "red");

world1.addObjectList([player, circle1, circle2, circle3, cyl1]);

game.start();
