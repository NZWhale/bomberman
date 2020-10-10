"use strict";
exports.__esModule = true;
exports.getRandomInRangeForYPosition = exports.generateWallsLength = exports.getRandomInRange = void 0;
function roundTo5(num) {
    return Math.round(num / 5) * 5;
}
function getRandomInRange(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    return roundTo5(random);
}
exports.getRandomInRange = getRandomInRange;
function generateWallsLength(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}
exports.generateWallsLength = generateWallsLength;
function getRandomInRangeForYPosition(min, max) {
    var mid = max / 2;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    if (random > mid) {
        return max;
    }
    else {
        return min;
    }
}
exports.getRandomInRangeForYPosition = getRandomInRangeForYPosition;
