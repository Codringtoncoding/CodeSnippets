// const string = "hello my name is ";

// const reverse = (str) => {
//   //check input
//   if (!str || str.length < 2 || typeof str !== "string") {
//     return console.log("nahh");
//   }
//   //backwards

//   const totalItems = str.length - 1;
//   const backwards = [];

//   for (let i = totalItems; i >= 0; i--) {
//     backwards.push(str[i]);
//   }
//   console.log(backwards);

//   return backwards.join("");
// };

// reverse(string);

// //js has array methods on strings

// //simplified

// const reverseTwo = (str) => {
//   return str.split("").reverse().join();
// };

// reverseTwo(string);

// const reverse3 = (str) => str.split("").reverse().join("");

// const reverse3 = (str) => [..str].reverse().join("");

// recursion

// 'string
function reverseStringRecursive(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseStringRecursive("hello asdas"));
