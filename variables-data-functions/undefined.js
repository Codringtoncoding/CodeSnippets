//javascript interpreter returns undefined when accessing a variable or object property that is not yet initialised.

let company;
company;    // => undefined
let person = { name: 'John Smith' };
person.age; // => undefined

let array = null;  
array;                // => null
let movie = { name: 'Starship Troopers',  musicBy: null };
movie.musicBy;        // => null
'abc'.match(/[0-9]/); // => null

// JavaScript has 6 primitive types:

// Boolean: true or false
// Number: 1, 6.7, 0xFF
// String: "Gorilla and banana"
// Symbol: Symbol("name") (starting ES2015)
// Null: null
// Undefined: undefined.
// Undefined value primitive value is used when a variable has not been assigned a value. 
//And a separated object type: {name: "Dmitri"}, ["apple", "orange"].

let number;
number;     // => undefined unititialised number value

let movie = { name: 'Interstellar' };
movie.year; // => undefined non existing property movie.year

let movies = ['Interstellar', 'Alexander'];
movies[3];  // => undefined non exisiting array element movies

// Undefined type is a type whose sole value is the undefined value.
typeof undefined === 'undefined'; // => true

let nothing;
typeof nothing === 'undefined';   // => true

function isPalindrome(word) {
    const length = word.length;
    const half = Math.floor(length / 2);
    for (let index = 0; index < half; index++) {
      if (word[index] !== word[length - index - 1]) {
        return false;
      }
    }
    return true;
  }
  isPalindrome('madam'); // => true
  isPalindrome('hello'); // => false

  //using the in operator for falsy values 

  function append(array, toAppend) {
    const arrayCopy = array.slice();
    if ('first' in toAppend) {
      arrayCopy.unshift(toAppend.first);
    }
    if ('last' in toAppend) {
      arrayCopy.push(toAppend.last);
    }
    return arrayCopy;
  }
  append([2, 3, 4], { first: 1, last: 5 }); // => [1, 2, 3, 4, 5]
  append([10], { first: 0, last: false });  // => [0, 10, false]

//   Object destructuring allows inline extraction of object property values directly into variables and setting a default value if the property does not exist. A convenient syntax to avoid dealing directly with undefined.

// Indeed, the property extraction is now precise:

const object = {  };
const { prop = 'default' } = object;
prop; // => 'default'

//similar to object assign 

const unsafeOptions = {
    fontSize: 18
  };
  const defaults = {
    fontSize: 16,
    color: 'black'
  };
  const options = {
    ...defaults,
    ...unsafeOptions
  };
  options.fontSize; // => 18
  options.color;    // => 'black'

  //making objects with defualt values means that there won't be undefeind 

  const value = nullOrUndefinedValue ?? defaultValue;
// Nullish coalescing operator is convenient to access an object property while having a default value when this property is undefined or null:

const styles = {
  fontSize: 18
};

styles.color ?? 'black'; // => 'black'
styles.fontSize ?? 16;   // => 18

// styles.fontSize is 18, so the nullish coalescing operator evaluates to the property value 18.

//function parameters

//if missing they return undefined 
// if missing value rreturn defualt 
function multiply(a, b) {
    if (b === undefined) {
      b = 2;
    }
    a; // => 5
    b; // => 2
    return a * b;
  }
  multiply(5); // => 10

  // this is better 
  function multiply(a, b = 2) {
    a; // => 5
    b; // => 2
    return a * b;
  }
  multiply(5);            // => 10
  multiply(5, undefined); // => 10

//   //so reduce the usage of uninitialized variables
// make the variables lifecycle short and close to the source of their usage
// whenever possible assign initial values to variables
// favor const, otherwise use let
// use default values for insignificant function parameters
// verify the properties existence or fill the unsafe objects with default properties
// avoid the usage of sparse arrays