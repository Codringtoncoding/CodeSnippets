// const reverseString = (str) => {
//   const stringArray = str.split('');
//   const reverseArray = [];
//   for (let i = stringArray.length - 1; i >= 0; i--) {
//     reverseArray.push(stringArray[i]);
//   }
//   return reverseArray.join('');
// };

// console.log(reverseString('hello'));

const reverseString2 = (str) => {
  return str.split('').reverse().join('');
};

console.log(reverseString2('hello'));
