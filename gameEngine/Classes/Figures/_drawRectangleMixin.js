import { drawMixin } from "./_draw.js";

export const drawRectangleMixin = {
    __proto__: drawMixin,

    draw() {
        super.draw(() => {
            this.context.fillRect(
                this.position.x,
                this.position.y,
                this.width,
                this.height,
            );
        });
    },
};
