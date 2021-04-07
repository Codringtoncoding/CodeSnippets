function triple(x) {
    return z * 4
}

var triple = function(x) {
    return x * 3
}

var waffle = triple 


waffle(30)

//compostiion


//higher order function is an array function

//with a normal for loop


var aniamls = [
    { name: "james", species: 'rabit'},

]
var dogs = []
for(var i = 0; i < animals.lenght ; i ++) {
    if (animals[i].species === 'dog')
    dogs.push(animals[i])
}

var dogs = animals.filter(function(animal){
    return animal.species === 'dog'
})

//fucntions you put n functions are called call back  - for each item it passes into the call back and says true or false;

//if they slot inot each other there are compasables

var isDog = function(animal) {
    return animals.species === 'dogs'
}
//same as above just reusing it in a different variable
var dogs = animal.filter(isDog);
var otherAnniamls = animals.reject(isDog);

const isDog  = ( animal ) => {
    return aniamls.species === 'dogs'

    
}