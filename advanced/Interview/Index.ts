class ConstructionGame {
  private table: boolean[][];
  private length: number;
  private width: number;
  private height: number;

  constructor(length: number, width: number) {
    this.length = length;
    this.width = width;
    this.height = 0; // Initialize height to 0
    this.table = new Array(length);
    for (let i = 0; i < length; i++) {
      this.table[i] = new Array(width).fill(false);
    }
  }
  public addCubes(cubes: boolean[][]): void {
    for (let i = 0; i < cubes.length; i++) {
      for (let j = 0; i < cubes[i].length; j++) {
        console.log(cubes);
        this.table[i][j] = cubes[i][j];
      }
    }
  }
  // public getHeight(): number {}
}
const game = new ConstructionGame(2, 2);

game.addCubes([
  [true, true],
  [false, false],
]);

// console.log(game.getHeight()); // should print 2

const NEWgame = new ConstructionGame(2, 2);

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
