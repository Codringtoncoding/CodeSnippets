//symbols are unqiue and we

let user = { // belongs to another code
    name: "John"
  };
  
  let id = Symbol("id");
  
  user[id] = 1;
  
  alert( user[id] ); // we can access the data using the symbol as the key

  //symbols are for 3rd party code

  //we should not just add random fields to the user object through strings

  //let id = Symbol("id");

let user = {
    name: "John",
    [id]: 123 // not "id": 123
  };

  //there are used in when using 3rd party scripts and system symbols 

  