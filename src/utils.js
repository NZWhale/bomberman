"use strict";
exports.__esModule = true;
exports.getRandomInRange = void 0;
function roundTo5(num) {
    return Math.round(num / 5) * 5;
}
function getRandomInRange(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    return roundTo5(random);
}
exports.getRandomInRange = getRandomInRange;
