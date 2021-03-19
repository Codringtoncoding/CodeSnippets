//constructor functions and start with a capital letter and initialise with a new ket word

function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
  let user = new User("Jack");
  
  alert(user.name); // Jack
  alert(user.isAdmin); // false


  //1. a new emoty obecjt is create assigned to this;
  //2. function body eecutes usullay modifies this like add properties
  //3. value of this is returned



  function User(name) {
    // this = {};  (implicitly)
  
    // add properties to this
    this.name = name;
    this.isAdmin = false;
  
    // return this;  (implicitly)
  }

let user = new User("Jack") gives the same result as:

let user = {
  name: "Jack",
  isAdmin: false
};

let user = new function() {
    this.name = "John";
    this.isAdmin = false;
  
    // ...other code for user creation
    // maybe complex logic and statements
    // local variables etc
  };


//testing for a constructor

function User() {
    alert(new.target);
  }
  
  // without "new":
  User(); // undefined
  
  // with "new":
  new User(); // function User { ... }

  function User(name) {
    if (!new.target) { // if you run me without new
      return new User(name); // ...I will add new for you
    }
  
    this.name = name;
  }
  
  let john = User("John"); // redirects call to new User
  alert(john.name); // John

  //methods in constructor


  function User(name) {
    this.name = name;
  
    this.sayHi = function() {
      alert( "My name is: " + this.name );
    };
  }
  
//don't use return on contructors it will override or it will just return this.

  let john = new User("John");
  
  john.sayHi(); // My name is: John
  
  /*
  john = {
     name: "John",
     sayHi: function() { ... }
  }
  */