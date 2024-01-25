var ConstructionGame = /** @class */ (function () {
    function ConstructionGame(length, width) {
        this.length = length;
        this.width = width;
        this.height = 0; // Initialize height to 0
        this.table = new Array(length);
        for (var i = 0; i < length; i++) {
            this.table[i] = new Array(width).fill(false);
        }
    }
    ConstructionGame.prototype.addCubes = function (cubes) {
        for (var i = 0; i < this.width; i++) {
            for (var j = 0; i < this.length; j++) {
                console.log(cubes);
                this.table[i][j] = cubes[i][j];
            }
        }
    };
    return ConstructionGame;
}());
var game = new ConstructionGame(2, 2);
game.addCubes([
    [true, true],
    [false, false],
]);
// console.log(game.getHeight()); // should print 2
var NEWgame = new ConstructionGame(2, 2);
// NEWgame.addCubes([
//   [true, true],
//   [false, true],
// ]);
// console.log(NEWgame.getHeight()); // should print 2
// const NEWgameNEW = new ConstructionGame(2, 2);
// NEWgameNEW.addCubes([
//   [false, false],
//   [true, true],
// ]);
// // console.log(NEWgameNEW.getHeight()); // should print 1
