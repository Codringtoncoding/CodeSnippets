var ConstructionGame = /** @class */ (function () {
    function ConstructionGame(length, width) {
        this.length = length;
        this.width = width;
        this.table = new Array(length);
        for (var i = 0; i < length; i++) {
            this.table[i] = new Array(width).fill(false);
        }
    }
    ConstructionGame.prototype.addCubes = function (cubes) {
        for (var i = 0; i < cubes.length; i++) {
            for (var j = 0; j < cubes[i].length; j++) {
                if (i < this.length && j < this.width) {
                    this.table[i][j] = cubes[i][j] || this.table[i][j];
                }
            }
        }
    };
    ConstructionGame.prototype.getHeight = function () {
        var height = 0;
        for (var i = 0; i < this.length; i++) {
            for (var j = 0; j < this.width; j++) {
                if (this.table[i][j]) {
                    height++;
                }
            }
        }
        return height;
    };
    return ConstructionGame;
}());
var game = new ConstructionGame(2, 2);
game.addCubes([
    [true, true],
    [false, false],
]);
console.log(game.getHeight()); // should print 2
game.addCubes([
    [true, true],
    [false, true],
]);
console.log(game.getHeight()); // should print 2
game.addCubes([
    [false, false],
    [true, true],
]);
console.log(game.getHeight()); // should print 1
