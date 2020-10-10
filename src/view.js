"use strict";
exports.__esModule = true;
exports.drawBombOnPlayground = exports.drawEnemiesOnPlaygroind = exports.drawPlayerOnPlayground = exports.drawBoxesOnPlayground = exports.drawWallsOnPlayground = exports.drawPlayground = void 0;
exports.drawPlayground = function (context, backgroundColor, playgroundWidth, playgroundHeight) {
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, playgroundWidth, playgroundHeight);
};
exports.drawWallsOnPlayground = function (context, drawingText, walls, playgroundHeight, playgroundWidth) {
    walls.forEach(function (wall) {
        var wallCoordinates = wall.getWallCoordinates();
        var wallLength = wall.getWallLength();
        if (wallCoordinates[1] === 0 && wallCoordinates[0] < playgroundWidth - 20) {
            for (var i = 0; i < wallLength; i++) {
                context.fillText(drawingText, wallCoordinates[0] + 17, wallCoordinates[1] + i * 13);
            }
        }
        if (wallCoordinates[1] === playgroundHeight && wallCoordinates[0] < playgroundWidth - 20)
            for (var i = 0; i < wallLength; i++) {
                context.fillText(drawingText, wallCoordinates[0] - 17, wallCoordinates[1] - i * 13);
            }
    });
};
exports.drawBoxesOnPlayground = function () {
};
exports.drawPlayerOnPlayground = function () {
};
exports.drawEnemiesOnPlaygroind = function () {
};
exports.drawBombOnPlayground = function () {
};
