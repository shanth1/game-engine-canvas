import { Vec2 } from "../../utils/Math/Vector.js";
import { Circle } from "../Figures/Circle.js";

export class Player extends Circle {
    constructor(x, y, radius, acceleration = 1) {
        super(x, y, radius);

        this.friction = 0.1;
        this.acc = acceleration;

        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
    }

    update = () => {};

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

    move = (context) => {
        if (this.up) {
            this.acceleration.y = -this.acc;
        }
        if (this.down) {
            this.acceleration.y = this.acc;
        }
        if (this.left) {
            this.acceleration.x = -this.acc;
        }
        if (this.right) {
            this.acceleration.x = this.acc;
        }

        if (!this.up && !this.down) {
            this.acceleration.y = 0;
        }
        if (!this.left && !this.right) {
            this.acceleration.x = 0;
        }

        this.acceleration.drawVector(
            context,
            this.position.x,
            this.position.y,
            60,
            "red",
        );

        this.velocity.drawVector(
            context,
            this.position.x,
            this.position.y,
            10,
            "green",
        );

        this.acceleration = this.acceleration.getUnitVector().scale(this.acc);
        this.velocity = this.velocity.add(this.acceleration);
        this.velocity = this.velocity.scale(1 - this.friction);
        this.position = this.position.add(this.velocity);
    };
}
