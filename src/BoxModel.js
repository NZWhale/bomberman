"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
var Box = /** @class */ (function () {
    function Box() {
    }
    Box.prototype.InitBoxCoordinations = function (Playground) {
        var xPoint = utils_1.getRandomInRange(0, Playground.getPlaygroundSize()[0]);
        var yPoint = utils_1.getRandomInRange(0, Playground.getPlaygroundSize()[1]);
        this.boxCoordinates.push(xPoint, yPoint);
    };
    Box.prototype.initBoxLength = function () {
        var boxLength = utils_1.getRandomInRange(0, 5);
        this.boxLength = boxLength;
    };
    Box.prototype.getBoxCoorditanes = function () {
        return this.boxCoordinates;
    };
    Box.prototype.getBoxLength = function () {
        return this.boxLength;
    };
    return Box;
}());
