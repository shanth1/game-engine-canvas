import {
    Window,
    Player,
    SphereObject,
    RectangleSurface,
    CubeObject,
    CylinderObject,
    Layer,
} from "./gameEngine/engine.js";
import { Vec2 } from "./gameEngine/utils/Math/Vector.js";

const game = new Window("game_engine", 600, 400);

const layer1 = new Layer(new Vec2(0, 0), true);
game.addWorld(layer1);

const surf1 = new RectangleSurface(
    new Vec2(0, 0),
    game.canvas.width,
    game.canvas.height,
    "green",
    0.05,
);
const surf2 = new RectangleSurface(
    new Vec2(0, 0),
    200,
    game.canvas.height,
    "blue",
    0,
);

layer1.addSurface(surf1);
layer1.addSurface(surf2);

const player = new Player(new Vec2(100, 100), 20, "red", 0.5, 1);
player.keyControlTopDown();

// const circle1 = new SphereObject(200, 250, 40);
// const circle2 = new SphereObject(400, 300, 20);
// const circle3 = new SphereObject(500, 50, 25);

const cyl1 = new CylinderObject(new Vec2(300, 400), 20, "green", 0.5, 1);

layer1.addObjectList([cyl1, player]);

game.start();
