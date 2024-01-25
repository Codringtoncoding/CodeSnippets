// var fizzBuzz = function (n) {
//   let arr = [];
//   while (n !== 0) {
//     if (n % 5 === 0 && n % 3 === 0) {
//       console.log(arr, "arr");
//       arr.push("FizzBuzz");
//     } else if (n % 3 === 0) {
//       arr.push("Fizz");
//     } else if (n % 5 === 0) {
//       arr.push("Buzz");
//     } else {
//       arr.push(n.toString());
//     }
//     n--;
//   }
//   return arr.reverse();
// };

// //space complextiy (o(1))
// //time complext (o(n))

// //my hash table

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var singleNumber = function (nums) {
//   const store = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (store[nums[i]] === undefined) {
//       store[nums[i]] = 1;
//     } else {
//       store[nums[i]]++;
//     }
//     console.log("store", store);
//   }

//   const getSingleNumber = () => {
//     for (let j = 0; j < nums.length; j++) {
//       if (store[nums[j]] === 1) {
//         console.log("get single", store);
//         return nums[j];
//       }
//     }
//     return "there is not a value of one";
//   };

//   const result = getSingleNumber();
//   console.log("store after", store);
//   return result;
// };

// //largest sum you can use the reduce function here to add up all the sum of everyhitng and then using math to max and min get the gighest
// // and lowest value and substract it

// function miniMaxSum(arr) {
//   let sum = arr.reduce((acc, val) => acc + val, 0);
//   let min = sum - Math.max(...arr);
//   let max = sum - Math.min(...arr);
//   console.log(min + " " + max);
// }

// var climbStairs = function (n) {
//   let cache = {};
//   function climb(n) {
//     console.log(cache);
//     if (n in cache) {
//       return cache[n];
//     } else {
//       if (n < 3) {
//         return n;
//       } else {
//         cache[n] = climb(n - 1) + climb(n - 2);
//         return cache[n];
//       }
//     } // recursion
//   }
//   return climb(n); // call the inner function with the n parameter
// };

// console.log(climbStairs(4)); // prints 5

// //find binary tree recursion
// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */

// var maxDepth = function (root) {
//   if (!root) {
//     return 0;
//   }
//   //base case

//   //recurison for each one

//   let leftTraversal = maxDepth(root.left);
//   let rightTraversal = maxDepth(root.right);

//   return Math.max(leftTraversal, rightTraversal) + 1;
// };

// //fund depth of a binary tree using iterations
// function maxDepth(root) {
//   if (!root) {
//     return 0;
//   }

//   let depth = 0;
//   let queue = [root];

//   while (queue.length > 0) {
//     depth++;
//     let size = queue.length;

//     for (let i = 0; i < size; i++) {
//       let node = queue.shift();

//       if (node.left) {
//         queue.push(node.left);
//       }

//       if (node.right) {
//         queue.push(node.right);
//       }
//     }
//   }

//   return depth;
// }

// //zero shift array

// var moveZeroes = function (nums) {
//   //base case

//   if (nums.length < 1) {
//     console.log("no numbers in array");
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       nums.push(0);
//       nums.splice(i, 1);
//     }
//   }
// };

// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var moveZeroes = function (nums) {
//   // base case
//   if (nums.length < 1) {
//     console.log("no numbers in array");
//     return;
//   }

//   // use two pointers to move zeros to end
//   // so here basically the left plays catch up to the right at the end and just fills in the zeros the amout of times
//   // has missed them in the while loop.
//   let left = 0;
//   let right = 0;
//   while (right < nums.length) {
//     if (nums[right] !== 0) {
//       nums[left] = nums[right];
//       left++;
//     }
//     right++;
//   }
//   while (left < nums.length) {
//     nums[left] = 0;
//     left++;
//   }

//   console.log(nums);
// };

// //

// function staircase(n) {
//   // iterate over each row
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     // add spaces to the row
//     for (let j = 1; j <= n - i; j++) {
//       row += " ";
//     }
//     // add hash symbols to the row
//     for (let k = 1; k <= i; k++) {
//       row += "#";
//     }
//     // print the row
//     console.log(row);
//   }
// }

// //sortedArray to BST:
// //get the base case and and return null if there inputs are invalid
// //get the middle by useing Math.floor()
// //create new node and set it with the value
// //recursively go through it and add left and right and add to the left and right of array
// var sortedArrayToBST = function (nums) {
//   if (nums == null || nums.length === 0) {
//     return null;
//   }

//   let mid = Math.floor(nums.length / 2);
//   //the middle value will be the root node
//   const newNode = new TreeNode(nums[mid]);
//   newNode.left = sortedArrayToBST(nums.slice(0, mid));
//   newNode.right = sortedArrayToBST(nums.slice(mid + 1, nums.length));
//   return newNode;
// };

// var titleToNumber = function (columnTitle) {
//   let output = 0;
//   for (let i = 0; i < columnTitle.length; i++) {
//     output +=
//       (columnTitle.charCodeAt(columnTitle.length - 1 - i) - 64) * 26 ** i;
//   }
//   return output;
// };

// const findFactR = (n) => {
//   debugger;
//   if (n <= 2) {
//     return n;
//   }

//   return n * findFactR(n - 1);
// };

// const findFactI = (n) => {
//   let answer = 1;
//   for (let i = 2; i <= number; i++) {
//     answer = answer * i;
//   }
//   return answer;
// };

const pricesOfStock = [9, 12, 409, 4, 1];

var maxProfit = function (prices) {
  let profit = 0;
  let stockToBuy = prices[0];
  console.log(
    "🚀 ~ file: questions.js:257 ~ maxProfit ~ stockToBuy:",
    stockToBuy
  );
  for (let i = 1; i < prices.length; i++) {
    if (stockToBuy > prices[i]) {
      stockToBuy = prices[i];
      console.log(profit);
    }

    const currentProf = prices[i] - stockToBuy;
    console.log(
      "🚀 ~ file: questions.js:268 ~ maxProfit ~ currentProf:",
      currentProf
    );

    if (currentProf > profit) {
      profit = currentProf;
    }
  }

  return profit;
};

console.log(maxProfit(pricesOfStock));
const pricesOfStock = [9, 12, 409, 4, 1];

const getProfit = (prices) => {
  let profit = 0;
  let stockToBuy = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (stockToBuy > prices[i]) {
      stockToBuy = prices[i];
    }
  }

  const currentProfit = prices[i] - stockToBuy;

  if (currentProfit > profit) {
    profit = currentProfit;
  }

  return profit;
};
