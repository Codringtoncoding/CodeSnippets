//objects are used for storing keyed collections
//arrays are used for storing ordered collectictions

//not enough so map and set exist

//map is cokkection of key data items like an object
//main difference is that map allows keys of any type

new Map() // creates map

map.set(key, value) // stores value by key
map.get(key) //returns the value by the key, undefinined if it doesn't exist
map.has(key) //returns true if the key exists, false otherwise.
map.delete(key) //removes the value by the key.
map.clear() // removes everything from the map.
map.size // returns the current element count.

let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3

//don't use map[key]

//implies object limiations such as sting and symbol kes

//use map get and set

//map can use object keys most notable thing 

let john = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

alert( visitsCountMap.get(john) ); // 123

// Using objects as keys is one of the most notable and important Map features. The same does not count for Object. String as a key in Object is fine, but we can’t use another Object as a key in Object.

// Let’s try:

let john = { name: "John" };
let ben = { name: "Ben" };

let visitsCountObj = {}; // try to use an object

visitsCountObj[ben] = 234; // try to use ben object as the key
visitsCountObj[john] = 123; // try to use john object as the key, ben object will get replaced

// That's what got written!
alert( visitsCountObj["[object Object]"] ); // 123
// As visitsCountObj is an object, it converts all Object keys, such as john and ben above, to same string "[object Object]". Definitely not what we want.

// Every map.set call returns the map itself, so we can “chain” the calls:

map.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');