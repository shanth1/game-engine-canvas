import { Vec2 } from "../../utils/Math/Vector.js";

export class Cylinder {
    constructor(x, y, radius, color, mass = 1, roughness = 0.2) {
        this.type = "cylinder";
        this.radius = radius;

        this.position = new Vec2(x, y);
        this.velocity = new Vec2(0, 0);
        this.acceleration = new Vec2(0, 0);

        this.gravityAcceleration = undefined;
        this.surfaceRoughness = 0;

        this.color = color;
        Math.abs(roughness) > 1
            ? (this.roughness = 1)
            : (this.roughness = Math.abs(roughness));

        this.mass = Math.abs(mass);

        this.visibleVectors = false;
    }

    _checkRectangleCollision(rectangle) {
        if (
            this.position.x - this.radius > rectangle.position.x &&
            this.position.x + this.radius <
                rectangle.position.x + rectangle.width &&
            this.position.y - this.radius > rectangle.position.y &&
            this.position.y + this.radius <
                rectangle.position.y + rectangle.height
        ) {
            return "entirely";
        } else if (
            this.position.x + this.radius > rectangle.position.x &&
            this.position.x - this.radius <
                rectangle.position.x + rectangle.width &&
            this.position.y + this.radius > rectangle.position.y &&
            this.position.y - this.radius <
                rectangle.position.y + rectangle.height
        ) {
            return "partially";
        } else {
            return false;
        }
    }

    _getSurfaceRoughness(surfaceList) {
        console.log(this.surfaceRoughness);
        this.otherCollision = false;
        for (let i = surfaceList.length - 1; i >= 0; i--) {
            switch (surfaceList[i].type) {
                case "rectangle":
                    const collision = this._checkRectangleCollision(
                        surfaceList[i],
                    );
                    if (collision === "partially") {
                        this.otherCollision = true;
                        if (this.surfaceRoughness < surfaceList[i].roughness) {
                            this.surfaceRoughness = surfaceList[i].roughness;
                        }
                    } else if (collision === "entirely") {
                        if (!this.otherCollision) {
                            this.otherCollision = false;
                            this.surfaceRoughness = surfaceList[i].roughness;
                            return;
                        } else {
                            if (
                                this.surfaceRoughness < surfaceList[i].roughness
                            ) {
                                this.surfaceRoughness =
                                    surfaceList[i].roughness;
                            }
                        }
                    } else {
                        this.otherCollision = false;
                        this.surfaceRoughness = 0;
                    }
            }
        }
    }

    draw = () => {
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.arc(
            this.position.x,
            this.position.y,
            this.radius,
            0,
            2 * Math.PI,
        );
        this.context.fill();
        this._drawVectors();
    };

    _drawVectors() {
        if (!this.visibleVectors) return;
        this.acceleration
            .getUnitVector()
            .drawVector(
                this.context,
                this.position.x,
                this.position.y,
                60,
                "red",
            );
        this.velocity.drawVector(
            this.context,
            this.position.x,
            this.position.y,
            10,
            "green",
        );
    }

    _resolveBorderCollision() {
        if (this.position.y + this.radius > this.canvas.height) {
            this.position.y = this.canvas.height - this.radius;
            this.velocity.y = -this.velocity.y;
        }
        if (this.position.y - this.radius < 0) {
            this.position.y = this.radius;
            this.velocity.y = -this.velocity.y;
        }
        if (this.position.x + this.radius > this.canvas.width) {
            this.position.x = this.canvas.width - this.radius;
            this.velocity.x = -this.velocity.x;
        }
        if (this.position.x - this.radius < 0) {
            this.position.x = this.radius;
            this.velocity.x = -this.velocity.x;
        }
    }

    update() {
        // debugger;
        this._resolveBorderCollision();

        this.velocity = this.velocity.add(this.acceleration);

        if (this.surfaceRoughness !== undefined) {
            this.frictionCoefficient =
                (this.surfaceRoughness + this.roughness) / 2;
            this.friction = this.frictionCoefficient;
            this.velocity = this.velocity.scale(1 - this.friction);
        }
        this.position = this.position.add(this.velocity);
    }
}
