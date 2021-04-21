// For plain objects, the following methods are available:

// Object.keys(obj) – returns an array of keys.
// Object.values(obj) – returns an array of values.
// Object.entries(obj) – returns an array of [key, value] pairs.

//have to call object.keys(obj)

//

let user = {
    name: "John",
    age: 30
  };
  Object.keys(user) = ["name", "age"]
  Object.values(user) = ["John", 30]
  Object.entries(user) = [ ["name","John"], ["age",30] ]


//using for loop over values using Object.valuies(user)
  let user = {
    name: "John",
    age: 30
  };
  
  // loop over values
  for (let value of Object.values(user)) {
    alert(value); // John, then 30
  }

  //transforming objects

  //objects lack methods arrays have

  //use onject. entries to get key values
  //use array methods on ti like map
  //use object.fromEntries(array) to turn it back to object

  let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };
  
  let doublePrices = Object.fromEntries(
    // convert to array, map, and then fromEntries gives back the object
    Object.entries(prices).map(([key, value]) => [key, value * 2])
  );
  
  alert(doublePrices.meat); // 8

  