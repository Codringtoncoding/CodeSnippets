const ladderLopper = (ladder: number[]): number => {
  let count = 0;
  let targetNumber = 0;
  if (!ladder.length) {
    return 0;
  }
  const ladderCopy = [...ladder];

  let found = false;

  while (!found) {
    for (let i = 0; i < ladderCopy.length; i++) {
      let value = ladderCopy[i];

      if (value === targetNumber) {
        found = true;
        return count;
      }
      value--;
      ladderCopy[i] = value;
    }
    count++;
  }
  return count;
};
const Two: number[] = [4, 5, 5, 4, 3, 5, 4];

console.log(ladderLopper(Two));
