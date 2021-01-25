"use strict";
exports.__esModule = true;
exports.squareSum = void 0;
function squareSum(numbers) {
    var result = 0;
    for (var i = 0; i < numbers.length; i += 1) {
        result += Math.pow(numbers[i], 2);
    }
    console.log(result);
    return result;
}
exports.squareSum = squareSum;
//loop through the numbers array with a counter of one and square each counter;
//add the result to value 0;
