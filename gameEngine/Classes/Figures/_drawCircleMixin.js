import { drawMixin } from "./_draw.js";

export const drawCircleMixin = {
    __proto__: drawMixin,

    draw() {
        super.draw(() => {
            this.context.arc(
                this.position.x,
                this.position.y,
                this.radius,
                0,
                2 * Math.PI,
            );
        });
    },
};
