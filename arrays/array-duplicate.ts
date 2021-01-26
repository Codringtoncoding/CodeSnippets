// //Given an array a that contains only numbers in the range from 1 to a.length,
//  find the first duplicate number for which the second occurrence has the minimal
//   index. In other words, if there are more than 1 duplicated numbers, return the
//   number for which the second occurrence has a smaller index than the second
//   occurrence of the other number does. If there are no such elements,
//   return -1.
//For a = [2, 1, 3, 5, 3, 2], the output should be firstDuplicate(a) = 3.

//There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.

//For a = [2, 2], the output should be firstDuplicate(a) = 2;

//For a = [2, 4, 3, 5, 1], the output should be firstDuplicate(a) = -1.

const firstDuplicate = (a: number[]): number => {
  const elementSet = new Set();
  for (let i = 0; i < a.length; i++) {
    if (elementSet.has(a[i])) return a[i];
    elementSet.add(a[i]);
  }

  return -1;
};


// //We need to make a place to store the iterated values called element set() 
// - this is a function that matches duplicates in javascript
// For loop counter in words: set a counter i to 0, for each 
// element i go through and add i if if it less then the arrays length
// So Set.has = function that checks for duplicates  - passing in the 
// array and each element in it if it has a duplicate it will return the 
// duplicate elements else it will then add the non duplicates to the element
//  set as a store.
	
// To note: the (a[i]) takes the array as an argument which passes the current value of the array.

// Remember indexing starts at 0 so 0 could be [1} or [59].
