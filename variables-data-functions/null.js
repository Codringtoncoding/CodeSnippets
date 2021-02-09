//simpliest object

let myObject = {
  name: "Eric Cartman",
};

//   But there are situations when an object cannot be created. For such cases, JavaScript provides a special value null — which indicates a missing object
let myObject = null;

function greetObject(who) {
  if (!who) {
    return null;
  }
  return { message: `Hello, ${who}!` };
}

greetObject("Eric"); // => { message: 'Hello, Eric!' }
greetObject(); // => null


//checking for null - use strict operator

const missingObject = null;
const existingObject = { message: 'Hello!' };

missingObject  === null; // => true
existingObject === null; // => false

//null is falsy -null, alongside false, 0, '',
//  undefined, NaN, is a falsy value. If a falsy value is encountered in conditionals, 
//  then JavaScript coerces falsy to false.

Boolean(null); // => false

if (null) {
  console.log('null is truthy');
} else {
  console.log('null is falsy'); // logs 'null is falsy'
}

//type of null 

typeof null; // => 'object'

//dont use type of to find null instaed use ===

function isObject(object) {
  return typeof object === 'object' && object !== null;
}

isObject({ prop: 'Value' }); // => true
isObject(15);                // => false
isObject(null);              // => false

//chaining 

let name = movie.director?.name;
// is equivalent to:

let name;
if (movie.director != null) {name = movie.director.name;
}

//dealing with null

function greetObject(who) {
  if (!who) {
    who = 'Stranger';
  }
  return { message: `Hello, ${who}!` };
}

greetObject('Eric'); // => { message: 'Hello, Eric!' }
greetObject();       // => { message: 'Hello, Stranger!' }
// either throw an error:

function greetObject(who) {
  if (!who) {
    throw new Error('"who" argument is missing');
  }
  return { message: `Hello, ${who}!` };
}

greetObject('Eric'); // => { message: 'Hello, Eric!' }
greetObject();       // => throws an errorfunction greetObject(who) {
  if (!who) {
    who = 'Stranger';
  }
  return { message: `Hello, ${who}!` };

greetObject('Eric'); // => { message: 'Hello, Eric!' }
greetObject();       // => { message: 'Hello, Stranger!' }
// either throw an error:

function greetObject(who) {
  if (!who) {
    throw new Error('"who" argument is missing');
  }
  return { message: `Hello, ${who}!` };
}

greetObject('Eric'); // => { message: 'Hello, Eric!' }
greetObject();       // => throws an error

//The main difference between null and undefined is that null represents a missing object, while undefined represents an uninitialized stat
null === undefined; // => false
null == undefined; // => true
