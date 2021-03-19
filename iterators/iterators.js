//iterables - generalisation of arrays

//allows objects to be use in for..of loop

//if obj is not array but a collection it works


Symbol.iterator

//range object
let range = {
    from: 1,
    to: 5
  };
  
  // We want the for..of to work:
  // for(let num of range) ... num=1,2,3,4,5

  ////add method to object name Symbol.iterator

  //when for of starts it calls methods once and it must return iteratir with mehtod next

//   for of only works with the returned obeect 

// when for of wants next it calls next()

//result must have form {done: Boolean, value: any} done =true it will finish

let range = {
    from: 1,
    to: 5
  };
  
  // 1. call to for..of initially calls this
  range[Symbol.iterator] = function() {
  
    // ...it returns the iterator object:
    // 2. Onward, for..of works only with this iterator, asking it for next values
    return {
      current: this.from,
      last: this.to,
  
      // 3. next() is called on each iteration by the for..of loop
      next() {
        // 4. it should return the value as an object {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };
  
  // now it works!
  for (let num of range) {
    alert(num); // 1, then 2, 3, 4, 5
  }

  //range doesn't have the next m,ethod

  //[Symbol.iterator]() does

  // technically range doesn't have next metod so we can merge

  let range = {
    from: 1,
    to: 5,
  
    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },
  
    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
  
  for (let num of range) {
    alert(num); // 1, then 2, 3, 4, 5
  }

  //strings are iterable

  for (let char of "test") {
    // triggers 4 times: once for each character
    alert( char ); // t, then e, then s, then t
  }

  //becareful with mixing arrays and arrays like: you can make arrays using

  let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
  };
  
  let arr = Array.from(arrayLike); // (*)
  alert(arr.pop()); // World (method works)
  

  // assuming that range is taken from the example above
let arr = Array.from(range);
alert(arr); // 1,2,3,4,5 (array toString conversion works)
// The full syntax for Array.from also allows us to provide an optional “mapping” function:

Array.from(obj[, mapFn, thisArg])
// The optional second argument mapFn can be a function that will be applied to each element before adding it to the array, and thisArg allows us to set this for it.

// For instance:

// assuming that range is taken from the example above

// square each number
let arr = Array.from(range, num => num * num);

alert(arr); // 1,4,9,16,25

let str = '𝒳😂';

// splits str into array of characters
let chars = Array.from(str);

alert(chars[0]); // 𝒳
alert(chars[1]); // 😂
alert(chars.length); // 2

let str = '𝒳😂';

let chars = []; // Array.from internally does the same loop
for (let char of str) {
  chars.push(char);
}

alert(chars_);

//Array.from(obj[, mapFn, thisArg]) makes a real Array from an iterable or array-like obj, 
// and we can then use array methods on it. The optional arguments mapFn and thisArg allow us to apply a function to each item.