(function(renderer) {
    var ballX = 300;
    var ballY = 200;
    var paddleOneX = 10;
    var paddleOneY = 150;
    var paddleTwoX = 590;
    var paddleTwoY = 150;

    function gameLoop() {
        renderer.clearCanvas();
        renderer.drawBall(ballX, ballY);
        renderer.drawPaddle(paddleOneX, paddleOneY);
        renderer.drawPaddle(paddleTwoX, paddleTwoY);
    }

    var fps = 60;
    setInterval(gameLoop, 1000 / fps);
})(window.Renderer);
