"use strict";
exports.__esModule = true;
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player() {
        this.currentCoordinates = [0, 0];
        this.isAlive = true;
    }
    Player.prototype.setCorrentCoordinates = function (x, y) {
        this.currentCoordinates[0] = x;
        this.currentCoordinates[1] = y;
    };
    Player.prototype.moveUp = function () {
        this.currentCoordinates[0] + 1;
    };
    Player.prototype.moveDown = function () {
        this.currentCoordinates[0] - 1;
    };
    Player.prototype.moveLeft = function () {
        this.currentCoordinates[1] - 1;
    };
    Player.prototype.moveRight = function () {
        this.currentCoordinates[1] + 1;
    };
    Player.prototype.playerDied = function () {
        this.isAlive = false;
    };
    Player.prototype.getAliveStatus = function () {
        return this.isAlive;
    };
    return Player;
}());
exports.Player = Player;
