import { Vec2 } from "../../utils/Math/Vector.js";
import { CubeObject } from "../Objects/CubeObject.js";

export class Player extends CubeObject {
    constructor(
        position = new Vec2(),
        width = 0,
        color = "black",
        roughness = 0,
        mass = 1,
    ) {
        super(position, width, color, roughness, mass);
        this.accelerationScalar = 1;
        this.type = "player";
        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
    }

    update() {
        this.acceleration = this.acceleration
            .getUnitVector()
            .scale(this.accelerationScalar);
        super.update();
        this._moving();
    }

    _getSurfaceRoughness() {}

    _moving() {
        if (this.up) {
            this.acceleration.y = -this.accelerationScalar;
        }
        if (this.down) {
            this.acceleration.y = this.accelerationScalar;
        }
        if (this.left) {
            this.acceleration.x = -this.accelerationScalar;
        }
        if (this.right) {
            this.acceleration.x = this.accelerationScalar;
        }

        if (!this.up && !this.down) {
            this.acceleration.y = 0;
        }
        if (!this.left && !this.right) {
            this.acceleration.x = 0;
        }
    }

    keyControlTopDown = () => {
        document.addEventListener("keydown", (event) => {
            if (event.code === "KeyW") {
                this.up = true;
            }
            if (event.code === "KeyS") {
                this.down = true;
            }
            if (event.code === "KeyA") {
                this.left = true;
            }
            if (event.code === "KeyD") {
                this.right = true;
            }
        });
        document.addEventListener("keyup", (event) => {
            if (event.code === "KeyW") {
                this.up = false;
            }
            if (event.code === "KeyS") {
                this.down = false;
            }
            if (event.code === "KeyA") {
                this.left = false;
            }
            if (event.code === "KeyD") {
                this.right = false;
            }
        });
    };
}
