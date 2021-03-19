let user = {}; // a user without "address" property

alert(user.address.street); // Error!

user.address // error undefined

let user = {}; // user has no address

alert( user?.address?.street ); // undefined (no error)

let user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined

let user = null;
let x = 0;

user?.sayHi(x++); // no "sayHi", so the execution doesn't reach x++

alert(x); // 0, value not incremented