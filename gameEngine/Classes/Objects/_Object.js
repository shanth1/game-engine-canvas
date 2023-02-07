import { Vec2 } from "../../utils/Math/Vector.js";
import { _Figure } from "../Figures/_Figure.js";

export class _Object extends _Figure {
    constructor(
        position = new Vec2(0, 0),
        color = "black",
        roughness = 0,
        mass = 1,
    ) {
        super(position, color);
        this.roughness = roughness;
        this.mass = mass;

        this.velocity = new Vec2(0, 0);
        this.acceleration = new Vec2(0, 0);
        this.visibleVectors = false;
    }

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

    checkCollisionWithObject(object) {
        switch (object.type) {
            case "cuboid":
                return this.checkCollisionWithRectangleObject(object);
            case "cylinder":
            case "sphere":
                return this.checkCollisionWithCircleObject(object);
        }
    }
    resolveCollisionWithObject(object) {
        switch (object.type) {
            case "cuboid":
                this.resolveCollisionWithRectangleObject(object);
                break;
            case "cylinder":
            case "sphere":
                this.resolveCollisionWithCircleObject(object);
                break;
        }
    }

    update() {
        this.velocity = this.velocity.add(this.acceleration);
        // if (this.surfaceRoughness !== 0) {
        //     this.frictionCoefficient =
        //         (this.surfaceRoughness + this.roughness) / 2;
        //     this.friction = this.frictionCoefficient;
        //     this.velocity = this.velocity.scale(1 - this.friction);
        // }
        this.position = this.position.add(this.velocity);
    }
}
