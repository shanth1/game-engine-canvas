import { Circle } from "../Figures/Circle.js";

export class Player extends Circle {
    constructor(x, y, radius, acceleration = 1) {
        super(x, y, radius);
        this.acc_x = 0;
        this.acc_y = 0;
        this.acceleration = acceleration;

        this.friction = 0.1;

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

    move = () => {
        if (this.up) {
            this.acc_y = -this.acceleration;
        }
        if (this.down) {
            this.acc_y = this.acceleration;
        }
        if (this.left) {
            this.acc_x = -this.acceleration;
        }
        if (this.right) {
            this.acc_x = this.acceleration;
        }

        if (!this.up && !this.down) {
            this.acc_y = 0;
        }
        if (!this.left && !this.right) {
            this.acc_x = 0;
        }

        this.dx += this.acc_x;
        this.dy += this.acc_y;
        this.dx *= 1 - this.friction;
        this.dy *= 1 - this.friction;
        this.x += this.dx;
        this.y += this.dy;
    };
}
