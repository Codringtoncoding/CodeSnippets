"use strict";
exports.__esModule = true;
exports.evenNumbers = void 0;
function evenNumbers(array, n) {
    var evenNumbers = [];
    array.forEach(function (el) {
        if (el % 2 == 0) {
            evenNumbers.push(el);
        }
    });
    var countBackArray = [];
    for (var i = evenNumbers.length - 1; i >= 0; i--) {
        countBackArray.push(evenNumbers[i]);
    }
    var countEvenNumbers = [];
    for (var i = 0; i < n; i++) {
        countEvenNumbers.unshift(countBackArray[i]);
    }
    return countEvenNumbers;
}
exports.evenNumbers = evenNumbers;
console.log(evenNumbers([2, 4, 6, 8, 10, 12], 4));
