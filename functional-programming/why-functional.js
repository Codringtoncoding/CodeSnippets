//don't mutate data

const { array } = require("prop-types");

//use pure functions they have fixed outputs and no side effects

//use exporessions and declartions

//const as we don't mutate 

//
//
//array filtering
const filterEven = x => x%2 === 0;  
[1, 2, 3].filter(filterEven);  
// [2]

//array map

array.map(mapper)
// mapper is a function that takes an item of an array as input and returns the output.

const double = x => 2 * x;  
[1, 2, 3].map(double);  
// [2, 4, 6]

//reduce reduces the array to a single value.

array.reduce(reducer);
// reducer is a function that takes the accumulated value and the next item in the array and returns the new value. It is called like this for all values in the array, one after another.

const sum = (accumulatedSum, arrayItem) => accumulatedSum + arrayItem  
[1, 2, 3].reduce(sum);
// 6

// Concat
// concat adds new items to an existing array to create a new array. It’s different from push() in the sense that push() mutates data, which makes it impure.

[1, 2].concat([3, 4])  
// [1, 2, 3, 4]
// You can also do the same using the spread operator.

[1, 2, ...[3, 4]]