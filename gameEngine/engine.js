import { Game } from "./Classes/Game.js";
import { Sphere } from "./Classes/Figures/Sphere.js";
import { Player } from "./Classes/Characters/Player.js";
import { World } from "./Classes/World.js";
import * as random from "./utils/random.js";

const engine = {
    // Game: Game,
    // Characters: {
    //     Player,
    //     Enemy,
    // },
    // figures: {
    //     Sphere: Sphere,
    // },
    // math: {},
    // random: random,
};

export default engine;
export { Game, Sphere, Player, World, random };
