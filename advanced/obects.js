//cloning 

//

let user = {
    name: "John",
    age: 30
  };
  
  let clone = {}; // the new empty object
  
  // let's copy all user properties into it
  for (let key in user) {
    clone[key] = user[key];
  }
  
  // now clone is a fully independent object with the same content
  clone.name = "Pete"; // changed the data in it
  
  alert( user.name ); // still John in the original object

  //this is for objects to copy as normally you pass by reference


  //object.assign
  let user = { name: "John" };

  let permissions1 = { canView: true };
  let permissions2 = { canEdit: true };
  
  // copies all properties from permissions1 and permissions2 into user
  Object.assign(user, permissions1, permissions2);
  
  // now user = { name: "John", canView: true, canEdit: true }

//vairable store object reference and not values so when passing it or 
//coppying it you copy the refernece and not the object

//garbage collection 

//when you remove reachabilty of objects 


