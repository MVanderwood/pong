(function() {
    var LogicEngine = {
        movePaddle: function(paddleY, direction) {
            if (direction === 'up') { paddleY--; }
            else if (direction === 'down') { paddleY++; }
        },
        moveBall: function(ballX, ballY, yDirection, xDirection) {
            if (yDirection === 'up') { ballY--; }
            else if (yDirection === 'down') { ballY++; }

            if (xDirection === 'left') { ballX--; }
            else if (xDirection === 'right') { ballX++; }
        }
    };

    window.LogicEngine = LogicEngine;
})();
