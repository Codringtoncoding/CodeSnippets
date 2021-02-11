// for(i = 0; i <= 10; i++) {
//     if (i === 5) {
//         continue;
//     }
//     if (i === 7) {
//         break;
//     }
//     console.log(i)
// }

// i = 0;
// while (i < 10) {
//   if (i === 5) {
//     continue
//   }
//   if ( i ===7 ){
//       break;
//   }

//   i++;
//   console.log(i);
// // }

// i = 0;

// do {
//     console.log("hello " +''+ i)
//     i++
// }

// while( i <= 10);

const person = {
  name: "",
  favorite_color: "",
  dob: "",
};

let arrayOfPeople = [];

function pushPeopleToARray(personInArray) {

  arrayOfPeople.push(personInArray);
  for (const element of arrayOfPeople) {
    console.log(element);
  }
  for (const property in personInArray) {
    console.log(`${property}: ${personInArray[property]}`);

  }

}


const person1 = {...person};
person1.name = "james";
person1.favorite_color = "blue";
person1.dob = "2010";
pushPeopleToARray(person1);

const person2 = {...person};
person2.name = "chad";
person2.favorite_color = "green";
person2.dob = "2012";
pushPeopleToARray(person2);

const person3 = {...person};
person3.name = "ben";
person3.favorite_color = "red";
person3.dob = "2011";
pushPeopleToARray(person3);

console.log(arrayOfPeople)