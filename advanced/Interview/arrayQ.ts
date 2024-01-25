// function usageCount(ladder: number[]): number {
//   let count = 0;
//   let targetNumber = 1; // The number you want to reach

//   for (let i = 0; i < ladder.length; i++) {
//     let value = ladder[i];

//     if (value === targetNumber) {
//       console.log(count, 'count inner loop');
//       return count;
//     }
//     console.log(value, 'val');
//     value--;

//     console.log(value, 'adter minus');
//     count++;
//   }
//   return count;
//   // If the target number is not reached
// }

// const ladder: number[] = [4, 5, 5, 4, 3, 5, 4];
// console.log(usageCount(ladder));

// function usageCountTwo(ladder: number[]): number {
//   let count = 0;
//   let targetNumber = 1; // The number you want to reach

//   for (let i = 0; i < ladder.length; i++) {
//     let value = ladder[i];

//     for (let j = value; j > targetNumber; j--) {
//       value -= 1;
//       count++;
//     }

//     if (value === targetNumber) {
//       console.log(count, 'count');
//       return count - 1;
//     }
//     return count - 1;
//   }
//   return 0;
//   // If the target number is not reached
// }

// const Two: number[] = [4, 5, 5, 4, 3, 5, 4];
// console.log(usageCountTwo(Two));

// function usageCount(ladder: number[]): number {
//   console.log(number);
//   let i = 0;

//   if (ladder[i] === 0) {
//     usageCount(ladder[i] - 1);
//   }
// }

function usageCount(ladder: number[]): number {
  let count = 0;
  let targetNumber = 0; // The number you want to reach

  // Check if the ladder array is empty.
  if (ladder.length === 0) {
    return 0;
  }

  let found = false;
  let ladderCopy = [...ladder]; // Create a copy of the original ladder array

  // Continue searching until the target number is found.
  while (!found) {
    for (let i = 0; i < ladderCopy.length; i++) {
      let value = ladderCopy[i];

      if (value === targetNumber) {
        console.log(count, 'count inner loop');
        return count; // Found the target, so return the count.
      }

      console.log(value, 'val');
  Ù Update the copy of the array with the decremented value.
    }
    count++;
    found = false;
  }
  return count;
  // You can add a stopping condition for the while loop if needed.
}

const Two: number[] = [4, 5, 5, 4, 3, 5, 4];
// const Three: number[] = [4, 2, 3, 6, 3, 5, 4];
// const Four: number[] = [4, 5, 6, 6, 4, 3, 4];

console.log(usageCount(Two));
// console.log(usageCount(Three));
// console.log(usageCount(Four));
