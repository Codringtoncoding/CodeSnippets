const firstNotRepeatingCharacter = (s: string): string => {
    for (var i = 0; i < s.length; i++) {
      var c = s.charAt(i);
      if (s.indexOf(c) == i && s.indexOf(c, i + 1) == -1) {
        return c;
      }
    }
    return '_';
  }

// //   Again loop through the string with a for loop and an increment 
// counter of plus one and make sure it stops when it is less than the length.
// // Make a variable called c and call the charAt method which returns 
// the character at the given i
// // E.g if i = 2 then char at will return the value at the index 2.
// // IndexOf - searches the string for the value of c and if it is equal
//  to the value at I (edge case) && and if the the value of c starting at position 
//  I + 1 ( matches the one infront)  equals -1 it means the value never occurs 
//  (built in return of the indexOf method)  so return  c
// // If none of this happens return ‘_;

// // So if abcda

// // If i = 0 , it will return c as A  
// // If A is equal to A it will always return the first one because it 
// can’t move forward so you have to put another counter in - so it has to
//  equal each other And if the character never matches then return the value of C. 

// // O of 1 always will be one operation it is the best to have 
// // O of N - grows linearly.
