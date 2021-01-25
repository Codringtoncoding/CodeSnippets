export function squareSum(numbers: number[]): number {
  let result = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    result += Math.pow(numbers[i], 2);
  }
  console.log(result);
  return result;
}

//loop through the numbers array with a counter of one and square each counter;
//add the result to value 0;

