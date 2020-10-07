"use strict";
exports.__esModule = true;
exports.Playground = void 0;
var Playground = /** @class */ (function () {
    function Playground(width, heigth) {
        this.width = width;
        this.heigth = heigth;
    }
    Playground.prototype.getPlaygroundSize = function () {
        return [this.width, this.heigth];
    };
    return Playground;
}());
exports.Playground = Playground;
