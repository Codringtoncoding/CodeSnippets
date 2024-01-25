//given an array of [1,3,4,5] return the     of the matching piar the hits the target
//target 11
var arrayToTest = [1, 2, 5, 6, 1, 5];
var findMatch = function (testArray, target) {
  var indexHashMap = {};
  for (var i = 0; i < testArray.length; i++) {
    var difference = target - testArray[i];
    if (indexHashMap[difference] !== undefined) {
      console.log([indexHashMap[difference], i], 'in');
      return [indexHashMap[difference], i];
    }
    indexHashMap[testArray[i]] = i;
  }
};
findMatch(arrayToTest, 11);

//first pass we want

// { 1: 0 },
// { 2: 1},
// { 5: 2},

// 11-5 = 6
