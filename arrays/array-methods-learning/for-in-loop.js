for (key in object) {
  // code block to be executed
}

var person = { fname: "John", lname: "Doe", age: 25 };
var text = "";
var x;
for (x in person) {
  text += person[x];
}


// //The for in loop iterates over a person object
// Each iteration returns a key (x)
// The key is used to access the value of the key
// The value of the key is person[x]

//arrays

for (variable in array) {
    code
}

var numbers = [45, 4, 9, 16, 25];

var txt = "";
var x;
for (x in numbers) {
  txt += numbers[x] + "<br>";
}
document.getElementById("demo").innerHTML = txt;

//do not use for in over an Array if the index order is important.

// The index order is implementation-dependent, and array values may not be accessed in the order you expect.

// It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.

Array.forEach()
// The forEach() method calls a function (a callback function) once for each array element.

// Example
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value + "<br>";
}

// //The item value
// The item index
// The array itself


// The JavaScript for/of statement loops through the values of an iterable object.

// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
//looping over and array

let cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x + "<br>";
}

//looping over a string
let language = "JavaScript";
let text = "";

for (let x of language) {
  text += x + "<br>";
}

document.getElementById("demo").innerHTML = text;