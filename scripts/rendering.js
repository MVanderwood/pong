(function() {
    var canvas = document.getElementById('game-element');

    var Rendering = {
        canvas: canvas,
        ctx: canvas.getContext('2d'),
        drawPaddle: function(locationX, locationY) {
            this.ctx.beginPath();
            this.ctx.rect(locationX, locationY, 10, 100);
            this.ctx.stroke();
            this.ctx.closePath();
        },
        drawBall: function(locationX, locationY) {
            this.ctx.beginPath();
            this.ctx.arc(locationX, locationY, 10, 0, 2*Math.PI);
            this.ctx.stroke();
            this.ctx.closePath();
        }
    };
    window.Rendering = Rendering;
})();
