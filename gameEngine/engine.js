import { Game } from "./Classes/Game.js";
import { Circle } from "./Classes/Figures/Circle.js";
import { Player } from "./Classes/Characters/Player.js";
import { Enemy } from "./Classes/Characters/Enemy.js";
import { Vector } from "./utils/Math/Vector.js";
import * as random from "./utils/random.js";

const engine = {
    Game: Game,
    Characters: {
        Player,
        Enemy,
    },
    figures: {
        Circle: Circle,
    },
    math: { Vector },
    random: random,
};

export default engine;
export { Game, Circle, Vector, random };
