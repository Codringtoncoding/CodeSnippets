class ConstructionGame {
  constructor(length, width) {
    this.length = length;
    this.width = width;
    this.table = new Array(length);
    for (let i = 0; i < length; i++) {
      this.table[i] = new Array(width).fill(false);
    }
  }

  addCubes(cubes) {
    for (let i = 0; i < cubes.length; i++) {
      for (let j = 0; j < cubes[i].length; j++) {
        if (i < this.length && j < this.width) {
          this.table[i][j] = cubes[i][j] || this.table[i][j];
        }
      }
    }
  }

  getHeight() {
    let height = 0;
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.width; j++) {
        if (this.table[i][j]) {
          height++;
        }
      }
    }
    return height;
  }
}

// Create a new game
const game = new ConstructionGame(2, 2);

// Add cubes and get the height
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
