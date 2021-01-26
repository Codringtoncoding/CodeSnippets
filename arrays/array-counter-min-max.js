function pipeFix(numbers) {
  var firstNum = numbers[0];
  var lastNum = numbers[numbers.length - 1];
  let result = [];
  for (let i = firstNum; i <= lastNum; i++) {
    result.push(i);
  }
  return result;

}
const numbers = [1,2,3,4,5,7];
console.log(pipeFix(numbers));
