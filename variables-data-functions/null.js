//simpliest object

let myObject = {
    name: 'Eric Cartman'
  };


//   But there are situations when an object cannot be created. For such cases, JavaScript provides a special value null — which indicates a missing object
  let myObject = null;

  function greetObject(who) {
    if (!who) {
      return null;
    }
    return { message: `Hello, ${who}!` };
  }
  
  greetObject('Eric'); // => { message: 'Hello, Eric!' }
  greetObject();       // => null
  