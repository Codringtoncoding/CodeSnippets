person = {
  firstname: "",
  lastname: "",
  dob: 2000,
  country_of_origin: "",
  displayType: function () {
    // Method which will display type of Animal
    console.log(this.firstname);
  },
  getAge: function () {
    const currentDate = new Date();
    const yearDate = currentDate.getFullYear()
    const result = yearDate - this.dob;
    return result
  },    
};

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

let person1 = new Object(person);
person1.firstname = "james";
person1.dob = 1998;

person.displayType();
console.log(person.getAge());

var person2 = Object.create(person);
person.firstname = "Fishes";
person1.dob = 1197;

person.displayType();
person.getAge();

var person3 = Object.create(person);
person1.dob = 1297;

person.firstname = "alex";
person.displayType();
person.getAge();