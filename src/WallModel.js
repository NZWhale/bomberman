"use strict";
exports.__esModule = true;
exports.Wall = void 0;
var utils_1 = require("./utils");
var Wall = /** @class */ (function () {
    function Wall() {
    }
    Wall.prototype.initWallCoordinations = function (Playground) {
        var xPoint = utils_1.getRandomInRange(0, Playground.getPlaygroundSize()[0]);
        var yPoint = utils_1.getRandomInRange(0, Playground.getPlaygroundSize()[1]);
        this.wallCoordinates.push(xPoint, yPoint);
    };
    Wall.prototype.initWallLength = function () {
        var wallLength = utils_1.getRandomInRange(0, 5);
        this.wallLength = wallLength;
    };
    Wall.prototype.getWallCoorditanes = function () {
        return this.wallCoordinates;
    };
    Wall.prototype.getWallLength = function () {
        return this.wallLength;
    };
    return Wall;
}());
exports.Wall = Wall;
