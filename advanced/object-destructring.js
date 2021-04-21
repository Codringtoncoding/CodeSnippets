//syntax for objects 

let {var1, var2} = {var1:…, var2:…}

//example

let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  let {title, width, height} = options;
  
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200

 // Properties options.title, options.width and options.height are assigned to the corresponding variables.

 // changed the order in let {...}
let {height, width, title} = { title: "Menu", height: 200, width: 100 }

//re-assinging variables using a colon

let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  // { sourceProperty: targetVariable }
  let {width: w, height: h, title} = options;
  
  // width -> w
  // height -> h
  // title -> title
  
  alert(title);  // Menu
  alert(w);      // 100
  alert(h);      // 200
//missing properties

let options = {
    title: "Menu"
  };
  
  let {width = 100, height = 200, title} = options;
  
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200

  //default values with prompts 

  let options = {
    title: "Menu"
  };
  
  let {width = prompt("width?"), title = prompt("title?")} = options;
  
  alert(title);  // Menu
  alert(width);  // (whatever the result of prompt is)
  
  //We also can combine both the colon and equality:


  let options = {
    title: "Menu"
  };
  
  let {width: w = 100, height: h = 200, title} = options;
  
  alert(title);  // Menu
  alert(w);      // 100
  alert(h);      // 200

  //if we have complex objects we can just extract what we need

  let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  // only extract title as a variable
  let { title } = options;
  
  alert(title); // Menu



  //accessing object properties 

  let options = {
    title: { Menu: "men"},
    width: 100,
    height: 200
  };
  
  // only extract title as a variable
  let { Menu } = options.title;
  
  alert(Menu); // Menu



//...rest 

  let options = {
    title: "Menu",
    height: 200,
    width: 100
  };
  
  // title = property named title
  // rest = object with the rest of properties
  let {title, ...rest} = options;
  
  // now title="Menu", rest={height: 200, width: 100}
  alert(rest.height);  // 200
  alert(rest.width);   // 100



//   In the examples above variables were declared right in the assignment: let {…} = {…}. Of course, we could use existing variables too, without let. But there’s a catch.

// This won’t work:

let title, width, height;

// error in this line
{title, width, height} = {title: "Menu", width: 200, height: 100};
// The problem is that JavaScript treats {...} in the main code flow (not inside another expression) as a code block. Such code blocks can be used to group statements, like this:

{
  // a code block
  let message = "Hello";
  // ...
  alert( message );
}
// So here JavaScript assumes that we have a code block, that’s why there’s an error. We want destructuring instead.

// To show JavaScript that it’s not a code block, we can wrap the expression in parentheses (...):

let title, width, height;

// okay now
({title, width, height} = {title: "Menu", width: 200, height: 100});

alert( title ); // Menu

//nesteed destructuring

let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };
  
  // destructuring assignment split in multiple lines for clarity
  let {
    size: { // put size here
      width,
      height
    },
    items: [item1, item2], // assign items here
    title = "Menu" // not present in the object (default value is used)
  } = options;
  
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200
  alert(item1);  // Cake
  alert(item2);  // Donut

//destructuring and functions 


//bad way 

function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
    // ...
  }
  showMenu("My Menu", undefined, undefined, ["Item1", "Item2"])

//so we do this: 

// we pass object to function
let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };
  
  // ...and it immediately expands it to variables
  function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
    // title, items – taken from options,
    // width, height – defaults used
    alert( `${title} ${width} ${height}` ); // My Menu 200 100
    alert( items ); // Item1, Item2
  }
  
  showMenu(options);

  //complex destructuring

  let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };
  
  function showMenu({
    title = "Untitled",
    width: w = 100,  // width goes to w
    height: h = 200, // height goes to h
    items: [item1, item2] // items first element goes to item1, second to item2
  }) {
    alert( `${title} ${w} ${h}` ); // My Menu 100 200
    alert( item1 ); // Item1
    alert( item2 ); // Item2
  }
  
  showMenu(options);
  //full synthax 

  function({
    incomingProperty: varName = defaultValue
    ...
  })

  //Then, for an object of parameters, there will be a variable varName for property incomingProperty, with defaultValue by default.

//Please note that such destructuring assumes that showMenu() does have an argument. If we want all values by default, then we should specify an empty object:

showMenu({}); // ok, all values are default

showMenu(); // this would give an error

// We can fix this by making {} the default value for the whole object of parameters:

function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
  alert( `${title} ${width} ${height}` );
}

showMenu(); // Menu 100 200

//summary


//object 

let {prop : varName = default, ...rest} = object


//array

let [item1 = default, item2, ...rest] = array


let user = { name: "John", years: 30 };

let { name, years: age, isAdmin: false  } = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  

  //function that returns highest paid person
  function topSalary(salaries) {
  
    let maxSalary = 0;
    let maxName = null;
  
    for (const [name, salary] of Object.entries(salaries)) {
      if (maxSalary < salary) {
        maxSalary = salary;
        maxName = name; 
      }
    }
  
    return maxName;
  }
  