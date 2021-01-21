//count each element in the array and see if it is divisible by 2 - if so push it to empty array called evenNumbers
export function evenNumbers(array: number[], n: number): number[] {
  let evenNumbers: number[] = [];
  array.forEach((el) => {
    if (el % 2 == 0) {
      evenNumbers.push(el);
    }
  });

  //count backwards in an array and push the numbers when the couter limit is reached
  let countBackArray: number[] = [];
  for (let i = evenNumbers.length - 1; i >= 0; i--) {
    countBackArray.push(evenNumbers[i]);
  }

  //implment a counter and use unshift which adds new items to an array
  let countEvenNumbers: number[] = [];
  for (let i = 0; i < n; i++) {
    countEvenNumbers.unshift(countBackArray[i]);
  }

  return countEvenNumbers;
}

console.log(evenNumbers([2,4,6,8,10,12],4));