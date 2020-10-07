var Bomb = /** @class */ (function () {
    function Bomb() {
        this.isExploded = false;
    }
    Bomb.prototype.setTheBomb = function (xCoordinates, yCoordinates) {
        var _this = this;
        this.correntCoordinates[0] = xCoordinates;
        this.correntCoordinates[1] = yCoordinates;
        setTimeout(function () {
            _this.isExploded = true;
        }, 5000);
    };
    Bomb.prototype.getBombCoordinates = function () {
        return this.correntCoordinates;
    };
    return Bomb;
}());
