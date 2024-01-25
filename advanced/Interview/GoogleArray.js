const array = [1, 4, 6, 2, 7, 2, 5, 2];
const arrayWithNoMatches = [1, 2, 3, 4, 5];

// const findPair = (arr) => {
//   const lookup = {};

//   // //if(no match) {
//   //     return undefined
//   // }

//   for (let i = 0; i < arr.length; i++) {
//     lookup.key = arr[i];
//     console.log(lookup);
//   }

//   for (let j = 0; j < arr.length; j++) {
//     if (lookup.key === arr[j]) {
//       return lookup.key && arr[j];
//     }
//   }

//   //   return pair;
// };

// findPair(array);

// const firstReccuringChar = (input) => {
//   //no input validation

//   for (let i = 0; i < input.length; i++) {
//     // one to the right of the index
//     for (let j = i + 1; i < input.length; j++) {
//       if (input[i] === input[j]) {
//         return input[i];
//       }
//     }
//     return undefined;
//   }
// };
// o of n ^ 2

function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
    console.log(" map", map);
  }
  return undefined;
}

console.log(firstRecurringCharacter2([1, 5, 4, 1, 3, 4, 6]));

var climbStairs = function (n) {
  let cache = {};
  function climb(n) {
    console.log(cache);
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 3) {
        return n;
      } else {
        cache[n] = climb(n - 1) + climb(n - 2);
        return cache[n];
      }
    } // recursion
  }
  return climb(n); // call the inner function with the n parameter
};

console.log(climbStairs(4)); // prints 5
