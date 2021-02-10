//Primitive values, like "John Doe", cannot have properties or methods (because they are not objects).

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;

/*
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript String Properties</h2>

<p>The length property returns the length of a string:</p>

<p id="demo"></p>

<script>
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
document.getElementById("demo").innerHTML = sln;
</script>

</body>
</html>
*/

// Finding a String in a String
// The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");

// //<html>
// <body>

// <h2>JavaScript String Methods</h2>

// <p>The indexOf() method returns the position of the first occurrence of a specified text:</p>

// <p id="demo"></p>

// <script>
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
document.getElementById("demo").innerHTML = pos;
// </script>

// </body>
// </html>

//this is the same as 

lastindexof

// Both indexOf(), and lastIndexOf() return -1 if the text is not found.

// Both methods accept a second parameter as the starting position for the search:

Example
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate", 15);

//21

//<h2>JavaScript String Methods</h2>

// <p>The search() method returns the position of the first occurrence of a specified text in a string:</p>

// <p id="demo"></p>

// <script>
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
document.getElementById("demo").innerHTML = pos;
// </script>

// </body>
// </html>
// searches for locate and returns 7.

//search of and index of a different. search of can do regex but doesn't take 2nd argument to start search.

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);

// gets bannana from the beginning

var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);
// gets bannana backwards counts backwards

var res = str.slice(7);

//if there is 1 argument slices out the everything up the sttring 

var res = str.slice(-12);

//works bacwards

// There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)

var str = "Apple, Banana, Kiwi";

var res = str.slice(7, 13);
var res = str.slice(-12, -6); //works backwards too 
var res = str.slice(7) // if there is only one parameter it will remove up the index
var res = str.slice(-7) // counts backwards too
// The result of res will be:
// Banana

//substring is similar but cannot take negative values, 
var res = str.substring(7, 13)


var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6)

//the substring methods takes out the string from the lenght going forward
//if not second it will just slice going forward - negative values also work

// Replacing String Content
// The replace() method replaces a specified value with another value in a string:

// Example
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");

//The replace() method does not change the string it is called on. It returns a new string.

// By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
//To replace case insensitive, use a regular expression with an /i flag (insensitive):

// Example
str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, "W3Schools");

//replace all matches 

str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");

//concat

var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2)

// //All string methods return a new string. They don't modify the original string.
// Formally said: Strings are immutable: Strings cannot be changed, only replaced

//removes white space
var str = "       Hello World!        ";
alert(str.trim());

//If you need to support IE 8, you can use replace() with a regular expression instead:

Example
var str = "       Hello World!        ";
alert(str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));

//pad start
let str = "5";
str = str.padStart(4,0);
// result is 0005

//pad end
let str = "5";
str = str.padEnd(4,0);
// result is 5000

//char at 
var str = "HELLO WORLD";
str.charAt(0);            // returns H

//char code at - returns a unicode - uselful for emojis
var str = "HELLO WORLD";

str.charCodeAt(0);         // returns 72
// [] you can use this to access too 
var str = "HELLO WORLD";
str[0];                   // returns H

//string to array 

function myFunction() {
    var str = "a,b,c,d,e,f";
    var arr = str.split(",");
    document.getElementById("demo").innerHTML = arr[0];
}
// returns a 

var str = "Hello";
var arr = str.split("");
var text = "";
var i;
for (i = 0; i < arr.length; i++) {
  text += arr[i] + "<br>"
}
// If the separator is omitted, the returned array will contain the whole string in index [0].

// If the separator is "", the returned array will be an array of single characters:
// //returns
// H
// e
// l
// l
// o

//Use escape characters to alert We are "Vikings".
var txt = "We are \"Vikings\"";
alert(txt);