export const objectMixins = {
    setSurfaceRoughness() {
        this.surfaceRoughness = 0;
    },

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
    },

    update() {
        this.velocity = this.velocity.add(this.acceleration);
        if (this.surfaceRoughness !== 0) {
            this.frictionCoefficient =
                (this.surfaceRoughness + this.roughness) / 2;
            this.friction = this.frictionCoefficient;
            this.velocity = this.velocity.scale(1 - this.friction);
        }
        this.position = this.position.add(this.velocity);
    },
};
