// The while loop loops through a block of code as long as a specified condition is true.
while (condition) {
  // code block to be executed
}

var text = "";
var i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("demo").innerHTML = text;

// The number is 0
// The number is 1
// The number is 2
// The number is 3
// The number is 4
// The number is 5
// The number is 6
// The number is 7
// The number is 8
// The number is 9

//If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.

//The do/while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true

do {
    // code block to be executed
  }
  while (condition);

  do {
    text += "The number is " + i;
    i++;
  }
  while (i < 10);

//The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:

var text = ""
var i = 0;

do {
  text += "<br>The number is " + i;
  i++;
}
while (i < 10);  

document.getElementById("demo").innerHTML = text;

// //The number is 0
// The number is 1
// The number is 2
// The number is 3
// The number is 4
// The number is 5
// The number is 6
// The number is 7
// The number is 8
// The number is 9

//comparision for vs while
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
var text = "";
for (;cars[i];) {
  text += cars[i] + "<br>";
  i++;
}
document.getElementById("demo").innerHTML = text;

//return BMW
// Volvo
// Saab
// Ford
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
var text = "";
while (cars[i]) {
  text += cars[i] + "<br>";
  i++;
}

//returns same

//break 

// The break statement "jumps out" of a loop.

var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;

// //The number is 0
// The number is 1
// The number is 2

// The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

// This example skips the value of 3:

Example
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}

//The continue statement (with or without a label reference) can only be used to skip one loop iteration.

// The break statement, without a label reference, can only be used to jump out of a loop or a switch.

// With a label reference, the break statement can be used to jump out of any code block:

// Example
var cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
  text += cars[0] + "<br>";
  text += cars[1] + "<br>";
  break list;
  text += cars[2] + "<br>";
  text += cars[3] + "<br>";
}


//prototype methods lets the array object be avlaible globally.

// Array.prototype.myUcase = function() {
//     for (i = 0; i < this.length; i++) {
//       this[i] = this[i].toUpperCase();
//     }
//   };