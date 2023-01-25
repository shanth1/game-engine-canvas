import { Circle } from "../Figures/Circle.js";

export class Player extends Circle {
    constructor(x, y, radius, speed = 2) {
        super(x, y, radius);
        this.speed = speed;
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

    move = () => {
        if (this.up) {
            this.y -= this.speed;
        }
        if (this.down) {
            this.y += this.speed;
        }
        if (this.left) {
            this.x -= this.speed;
        }
        if (this.right) {
            this.x += this.speed;
        }
    };
}
