"use strict";
exports.__esModule = true;
exports.Playground = void 0;
var Playground = /** @class */ (function () {
    function Playground(width, height) {
        this.width = width;
        this.height = height;
    }
    Playground.prototype.getPlaygroundWidth = function () {
        return this.width;
    };
    Playground.prototype.getPlaygroundHeight = function () {
        return this.height;
    };
    return Playground;
}());
exports.Playground = Playground;
