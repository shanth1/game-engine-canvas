import { Vec2 } from "../utils/Math/Vector";

export const physicalProperties = {
    setPhysicalProperties(
        velocity = new Vec2(0, 0),
        acceleration = new Vec2(0, 0),
        roughness = 0,
        mass = 0,
    ) {
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.roughness = roughness;
        this.mass = mass;
    },
};
