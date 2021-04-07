var animals = [
    { name: "james", species: 'rabit'},
    { name: "alex", species: 'pizza'}

]

var names = []

for ( var i = 0; i < aniamls.length; i++) {
    names.push(aniamls[i].name)
}

console.log(names)

//using map 


var names = animals.map(function(animal) {
    return animal.name + ' is a ' + animal.species
})

//arrow functions 
//implict returns

var names = animals.map((animal) => animal.name)

//shorther

var names = animals.map((x) => x.name)

