import { Window } from "./Classes/Window.js";
import { Player } from "./Classes/Characters/Player.js";
import { Layer } from "./Classes/Layer.js";
import * as random from "./utils/random.js";
import { SphereObject } from "./Classes/Objects/SphereObject.js";
import { CylinderObject } from "./Classes/Objects/CylinderObject.js";
import { RectangleSurface } from "./Classes/Surfaces/RectangleSurface.js";

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
export {
    Window,
    RectangleSurface,
    SphereObject,
    CylinderObject,
    Player,
    Layer,
    random,
};
