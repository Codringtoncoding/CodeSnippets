var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;

//will write 

//BMW
// Volvo
// Saab
// Ford
// Fiat
// Audi

//for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true

// The for loop has the following syntax:

// for (statement 1; statement 2; statement 3) {
//   // code block to be executed
// }
// Statement 1 is executed (one time) before the execution of the code block.

// Statement 2 defines the condition for executing the code block.

// Statement 3 is executed (every time) after the code block has been executed.

// Example
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

//many values in statement one
for (i = 0, len = cars.length, text = ""; i < len; i++) {
    text += cars[i] + "<br>";
  }
//you can omit statement one 

var i = 2;
var len = cars.length;
var text = "";
for (; i < len; i++) {
  text += cars[i] + "<br>";
}



//If you omit statement 2, you must provide a break inside the loop. Otherwise the loop will never end. This will crash your browser. Read about breaks in a later chapter of this tutorial.