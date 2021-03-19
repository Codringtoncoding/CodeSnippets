let user = {
    // ...
  };
  
  // first, declare
  function sayHi() {
    alert("Hello!");
  };
  
  // then add as a method
  user.sayHi = sayHi;
  
  user.sayHi(); // Hello!

  // these objects do the same

user = {
    sayHi: function() {
      alert("Hello");
    }
  };
  
  // method shorthand looks better, right?
  user = {
    sayHi() { // same as "sayHi: function()"
      alert("Hello");
    }
  };

  let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      // "this" is the "current object"
      alert(this.name);
    }
  
  };
  
  user.sayHi(); // John

//   echnically, it’s also possible to access the object without this, by referencing it via the outer variable:

let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert(user.name); // "user" instead of "this"
  }

};
// …But such code is unreliable. If we decide to copy user to another variable, e.g. admin = user and overwrite user with something else, then it will access the wrong object.

// That’s demonstrated below:

let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert( user.name ); // leads to an error
  }

};

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)

//can have this for two objects: it is not bound

let admin = user;
user = null; // overwrite to make things obvious

admin.sayHi(); // TypeError: Cannot read property 'name' of null

// Calling without an object: this == undefined
// We can even call the function without an object at all:

function sayHi() {
  alert(this);
}

sayHi(); // undefined
// In this case this is undefined in strict mode. If we try to access this.name, there will be an error.

// In non-strict mode the value of this in such case will be the global object (window in a browser, we’ll get to it later in the chapter Global object). This is a historical behavior that "use strict" fixes.

// Usually such call is a programming error. If there’s this inside a function, it expects to be called in an object context.


//don't have mutations in redux







...list //array spread operater iterate through when all required in a list 
//for function calls
//pass all element as areguemnts too

//for array litreals
let parts = ['shoulders', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes'];
//  ["head", "shoulders", "knees", "and", "toes"]

[...iterableObj, '4', 'five', 6]; // combine two arrays by inserting all elements from iterableObj

//for object literals 

let objClone = { ...obj }; // pass all key:value pairs from an object 
//copy an array cannot be done for mulitdimension arrays

let arr = [1, 2, 3];
let arr2 = [...arr]; // like arr.slice()

arr2.push(4);
//  arr2 becomes [1, 2, 3, 4]
//  arr remains unaffected

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

//Array.prototype.concat()

//  Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);
// With spread syntax this becomes:

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
//  arr1 is now [0, 1, 2, 3, 4, 5]
// Note: Not to use const otherwise, it will give TypeError (invalid assignment)