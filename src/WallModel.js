"use strict";
exports.__esModule = true;
exports.Wall = void 0;
var utils_1 = require("./utils");
var PlaygroundModel_1 = require("./PlaygroundModel");
var Wall = /** @class */ (function () {
    function Wall() {
        this.wallCoordinates = [];
        this.wallLength = 0;
        this.wallCoordinates = this.initWallCoordinations(PlaygroundModel_1.Playground);
        this.wallLength = this.initWallLength();
    }
    Wall.prototype.initWallCoordinations = function (Playground) {
        var xPoint = utils_1.getRandomInRange(0, 600);
        var yPoint = utils_1.getRandomInRangeForYPosition(0, 300);
        // const xPoint = getRandomInRange(0, Playground.getPlaygroundWidth())
        // const yPoint = getRandomInRange(0, Playground.getPlaygroundHeigth())
        return [xPoint, yPoint];
    };
    Wall.prototype.initWallLength = function () {
        var wallLength = utils_1.generateWallsLength(5, 10);
        return wallLength;
    };
    Wall.prototype.getWallCoordinates = function () {
        return this.wallCoordinates;
    };
    Wall.prototype.getWallXPosition = function () {
        return this.wallCoordinates[0];
    };
    Wall.prototype.getWallYPosition = function () {
        return this.wallCoordinates[1];
    };
    Wall.prototype.getWallLength = function () {
        return this.wallLength;
    };
    return Wall;
}());
exports.Wall = Wall;
