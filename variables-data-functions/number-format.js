//Method	Description

Number()	//Return number converted from its argument
parseFloat()	//Parse its argument and return a float
parseInt() //Parse its argument and returns an integer

//for numbers only 

toString()	//Return number as string

var a = 653;
document.getElementById("test").innerHTML =
    a.toString() + "<br>" +
    (653).toString() + "<br>" +
    (600 + 53).toString();

toExponential()  //Return string with number rounded and written with exponential notation.

var a = 4;
document.getElementById("test").innerHTML =
    a.toExponential() + "<br>" +
    a.toExponential(2) + "<br>" +
    a.toExponential(4) + "<br>" +
    a.toExponential(6);

// returns 4e+0
// 4.00e+0
// 4.0000e+0
// 4.000000e+0

toFixed()	//Return string with number rounded and written using a specified number of decimals. good for payments

var a = 4.236;
document.getElementById("test").innerHTML =
    a.toFixed(0) + "<br>" +
    a.toFixed(1) + "<br>" +
    a.toFixed(3) + "<br>" +
    a.toFixed(5);

toPrecision()	//Return string with a number written with a specified length
valueOf()	//Return number as a number

//
var x = 4.236;
document.getElementById("test").innerHTML =
    x.toPrecision() + "<br>" +
    x.toPrecision(2) + "<br>" +
    x.toPrecision(4) + "<br>" +
    x.toPrecision(6);
//4.236
// 4.2
// 4.236
// 4.23600

//If you find yourself in need to turn a variable into a number, these are the three methods you can use:

Number()
parseInt()
parseFloat()

document.getElementById("test").innerHTML =
Number(true) + "<br>" +
Number(false) + "<br>" +
Number("12") + "<br>" +
Number("12.24") + "<br>" +
Number("12 24") + "<br>" +
Number("12,24") + "<br>" +
Number("Tim");

//1
// 0
// 12
// 12.24
// NaN
// NaN
// NaN

document.getElementById("test").innerHTML =
    parseInt("21") + "<br>" +
    parseInt("21.32") + "<br>" +
    parseInt("21 32 42") + "<br>" +
    parseInt("21 days") + "<br>" +
    parseInt("day 21");
//document.getElementById("test").innerHTML =

//21
// 21
// 21
// 21
// NaN

document.getElementById("test").innerHTML = 
    parseFloat("21") + "<br>" +
    parseFloat("21.14") + "<br>" +
    parseFloat("21 14 34") + "<br>" +    
    parseFloat("21 days") + "<br>" +
    parseFloat("day 21");
//The JavaScript function parseFloat() converts strings to numbers:

// 21
// 21.14
// 21
// 21
// NaN

//valueOf() is used to return a number as a number. When looking at JavaScript code, numbers may be primitive values (typeOf = number) or objects (typeOf = object). The method called valueOf() is used internally to turn number objects into primitive values.

var a = 246;
document.getElementById("test").innerHTML =
    a.valueOf() + "<br>" +
    (246).valueOf() + "<br>" +
    (200 + 46).valueOf();
//246
// 246
// 246

