/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  //loop through array
  //loop through with a lead
  //each iteration add them together
  //if equal target return the indexs of the two elements
  //else continue

  //if nothing return 'nothing'

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [[i], [j]];
      }
    }
  }
  return [];
};

//hash map
