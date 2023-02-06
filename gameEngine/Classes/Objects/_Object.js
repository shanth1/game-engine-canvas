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

    _getTypeOfRectangleCollision(rectangle) {
        if (
            this.position.x - this.radius > rectangle.position.x &&
            this.position.x + this.radius <
                rectangle.position.x + rectangle.width &&
            this.position.y - this.radius > rectangle.position.y &&
            this.position.y + this.radius <
                rectangle.position.y + rectangle.height
        ) {
            return "entirely";
        } else if (this._detectCollisionWithRectangle(rectangle)) {
            return "partially";
        } else {
            return false;
        }
    }

    _getSurfaceRoughness(surfaceList) {
        this.otherCollision = false;
        for (let i = surfaceList.length - 1; i >= 0; i--) {
            switch (surfaceList[i].type) {
                case "rectangle":
                    const collision = this._getTypeOfRectangleCollision(
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
                    break;
            }
        }
    }

    update() {
        this._getSurfaceRoughness(this.surfaceList);
        this.velocity = this.velocity.add(this.acceleration);
        if (this.surfaceRoughness !== 0) {
            this.frictionCoefficient =
                (this.surfaceRoughness + this.roughness) / 2;
            this.friction = this.frictionCoefficient;
            this.velocity = this.velocity.scale(1 - this.friction);
        }
        this.position = this.position.add(this.velocity);
    }
}
