export const drawMixin = {
    draw(drawingFunction) {
        try {
            this.context.beginPath();
            this.context.fillStyle = this.color;
            drawingFunction();
            this.context.fill();
        } catch (error) {
            console.log(error);
        }
    },
};
