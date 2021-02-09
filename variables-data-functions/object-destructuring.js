var hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
  };
  
  var name     = hero.name;
  var realName = hero.realName;
  
  name;     // => 'Batman',
  realName; // => 'Bruce Wayne'

//the above code is refactored to this below:

  const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
  };
  
  const { name, realName } = hero;
  
  name;     // => 'Batman',
  realName; // => 'Bruce Wayne'

  const name     = hero.name;
const realName = hero.realName;

// what happens when object property doesn't exist 
const { name, realName } = hero;

const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
  };
  
  const { enemies = ['Joker'] } = hero;
  
  enemies;     // => ['Joker']

  //making alias 

  const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
  };
  
  const { realName: secretName } = hero;
  
  secretName; // => 'Bruce Wayne

  //property extractionm from nested objects 

  const { propA: { propB: { propC: { ...p } } } } = object;

  const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne',
    address: {
      city: 'Gotham'
    }
  };
  
  // Object destructuring:
  const { address: { city } } = hero;
  
  city; // => 'Gotham'
  //dynamic destructuring 

  const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
  };
  
  const prop = 'name';
  const { [prop]: name } = hero;
  
  name; // => 'Batman'

  //rest object ... leepys all the other properties how they were. the rest of the objects are put intop the realHero variable 

  const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
  };
  
  const { name, ...realHero } = hero;
  
  realHero; // => { realName: 'Bruce Wayne' }

  //

  // existing variable
let name;

const hero = {
  name: 'Batman',
};

({ name } = hero);

name; // => 'Batman'

// I find it satisfying to combine for..of cycle with object destructuring to extract the property right away:

const heroes = [
  { name: 'Batman' },
  { name: 'Joker' }
];

for (const { name } of heroes) {
  console.log(name); // logs 'Batman', 'Joker'
}

const heroes = [
    { name: 'Batman' },
    { name: 'Joker' }
  ];
  
  const names = heroes.map(
    function({ name }) {
      return name;
    }
  );
  
  names; // => ['Batman', 'Joker']
//   function({ name }) destructures the function parameter, creating a variable name holding the value of name property.