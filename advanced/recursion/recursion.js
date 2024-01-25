// let counter = 0;
// const recursion = () => {
//   console.log(counter);
//   if (counter > 3) {
//     console.log("done");
//     return "done";
//   }
//   counter++;
//   return recursion();
//   console.log("wtf");
// };

//o(n)

// recursion();

//this is what we did (inception(inception(inception(inception(done)))))
// we pop stuff off the stack we return done
//must return it so it bubbles up

//identify the base case - when to stop
//identify the recurisive case - when to counter is less than 3
//get close and closer and return when needed - usually you have two returns for the base case and the recursive case

//fuctnion gets close and closer to the base case

const findFactRecursive = (number) => {
  if (number === 2) {
    return 2;
  }

  return number * findFactRecursive(number - 1);
};

// const findFactInterative = (number) => {
//   let answer = 1;
//   if (number === 2) {
//     answer = 2;
//   }
//   for (let i = 2; i <= number; i++) {
//     console.log(i, "i");
//     answer = answer * i;
//   }
//   console.log(answer);
//   return answer;
// };

//o(n)

// findFactInterative(5);
console.log(findFactRecursive(5));
//start at 2 we can just return as there is no calculation required.
