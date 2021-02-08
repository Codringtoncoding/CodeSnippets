// strings

const message = "gello";

console.log(typeof message);

//numbers

const numbers = 5;

typeof numbers;

//booleans

const ok = true;

typeof ok;

//symbols

const symbol = Symbol("key");

typeof symbol;

const nothing = undefined;

typeof nothing; // => 'undefined'

const object = { name: "Batman" };
typeof object; // => 'object'

const array = [1, 4, 5];
typeof array; // => 'object'

const regExp = /Hi/;
typeof regExp; // => 'object'

function greet(who) {
  return `Hello, ${who}!`;
}

typeof greet; // => 'function'

// null is nasty - always evaluates as an object

const missingObject = null;
typeof missingObject; // => 'object'

// in javascript when checking for type of be sure to check against null additionally

function isObject(object) {
    return typeof object === 'object' && object !== null;
  }
  
  isObject({ name: 'Batman' }); // => true
  isObject(15);                 // => false
  isObject(null);               // => false

