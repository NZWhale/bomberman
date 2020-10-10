"use strict";
exports.__esModule = true;
exports.Box = void 0;
var utils_1 = require("./utils");
var Box = /** @class */ (function () {
    function Box() {
        this.boxWidth = 1;
        this.initBoxCoordinations;
        this.initBoxHeigth;
        // this.initBoxWidth
    }
    Box.prototype.initBoxCoordinations = function (Playground) {
        var playgroundHeigth = Playground.getPlaygroundHeight();
        var playgroundWidth = Playground.getPlaygroundWidth();
        var xPoint = utils_1.getRandomInRange(0, playgroundHeigth);
        var yPoint = utils_1.getRandomInRange(0, playgroundWidth);
        this.boxCoordinates.push(xPoint, yPoint);
    };
    Box.prototype.initBoxHeigth = function () {
        var boxHeigth = utils_1.getRandomInRange(0, 5);
        this.boxHeigth = boxHeigth;
    };
    // private initBoxWidth() {
    //     const boxWidth = getRandomInRange(0, 5)
    //     this.boxWidth = boxWidth
    // }
    Box.prototype.getBoxCoorditanes = function () {
        return this.boxCoordinates;
    };
    Box.prototype.getBoxHeigth = function () {
        return this.boxHeigth;
    };
    return Box;
}());
exports.Box = Box;
