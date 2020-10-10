"use strict";
exports.__esModule = true;
var PlaygroundModel_1 = require("./PlaygroundModel");
var wallModel_1 = require("./wallModel");
var BoxModel_1 = require("./BoxModel");
var view_1 = require("./view");
var CANVAS = document.getElementById("playground");
var ctx = CANVAS.getContext("2d");
var playground = new PlaygroundModel_1.Playground(600, 300);
var backgroundColor = "purple";
var wallEmoj = "🔲🔲";
var walls = [];
var wallsAmmount = 8;
var checkDistanceBetweenWalls = function () {
    var checkingWalls = [];
    for (var i = 0; i < wallsAmmount; i++) {
        var wall = new wallModel_1.Wall();
        checkingWalls.push(wall);
    }
    for (var i = 0; i < checkingWalls.length; i++) {
        var firstWall = checkingWalls[i];
        for (var j = i + 1; j < checkingWalls.length; j++) {
            var secondWall = checkingWalls[j];
            if (firstWall.getWallXPosition() - secondWall.getWallXPosition() < 30 && firstWall.getWallXPosition() - secondWall.getWallXPosition() > -30) {
                checkingWalls.splice(j, 1);
            }
        }
    }
    checkingWalls.forEach(function (checkingWall) { return walls.push(checkingWall); });
};
var box = new BoxModel_1.Box();
CANVAS.width = playground.getPlaygroundWidth();
CANVAS.height = playground.getPlaygroundHeight();
checkDistanceBetweenWalls();
view_1.drawPlayground(ctx, backgroundColor, CANVAS.width, CANVAS.height);
view_1.drawWallsOnPlayground(ctx, wallEmoj, walls, playground.getPlaygroundHeight(), playground.getPlaygroundWidth());


window.walls = walls