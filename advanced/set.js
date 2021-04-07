// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

new Set(iterable) // creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) // adds a value, returns the set itself.
set.delete(value) // removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) // returns true if the value exists in the set, otherwise false.
set.clear() // removes everything from the set.
set.size – // the elements count.

//example if the vistors 
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert( set.size ); // 3

for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}


//iteration over a set 

let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
  alert(value);
});