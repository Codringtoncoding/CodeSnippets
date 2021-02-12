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

const arrayOfPeople = [
  {
    name: "ben",
    favorite_color: "blue",
    dob: "1998",
  },
  {
    name: "jame",
    favorite_color: "green",
    dob: "1909",
  },
  {
    name: "alex",
    favorite_color: "blue",
    dob: "2010",
  },
];

function displayPeople(arrayOfPeople) {
     console.log('---------------')
  for (const person of arrayOfPeople) {
    for (const item in person) {
        console.log(`${item}: ${person[item]}`);
        console.log('---------------')

    }
  }
}

displayPeople(arrayOfPeople);

function pushPeopleToARray(personInArray) {
 console.log('---------------')
  arrayOfPeople.push(personInArray);

  for (const person of arrayOfPeople) {
    for (const item in person) {
        console.log(`${item}: ${person[item]}`);

      }
  }

}
// const person1 = {...person};
// person1.name = "james";
// person1.favorite_color = "blue";
// person1.dob = "2010";
// pushPeopleToARray(person1);

// const person2 = {...person};
// person2.name = "chad";
// person2.favorite_color = "green";
// person2.dob = "2012";
// pushPeopleToARray(person2);

// const person3 = {...person};
// person3.name = "ben";
// person3.favorite_color = "red";
// person3.dob = "2011";
// pushPeopleToARray(person3);

console.log(arrayOfPeople)
