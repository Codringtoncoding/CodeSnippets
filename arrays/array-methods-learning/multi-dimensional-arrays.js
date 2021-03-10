let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];

console.table(activities);
console.log(activities[0][1]); // 9

activities.push(['Study',2]);

//pushes array to last but of array

activities.splice(1, 0, ['Programming', 2]);
//inserts an element in the second postion of the activities array.
console.table(activities);

//here the array part [1] in activity refers to the 2nd column. sp for each in 2nd column 
//divide by 24 and x 100. then add another column activity [2] to store the results
activities.forEach(activity => {
    let percentage = ((activity[1] / 24) * 100).toFixed();
    activity[2] = percentage + '%';
});

console.table(activities);

activities.pop();
console.table(activities);

//you can simialry remove th elemets of the inner array by using pop too

activities.forEach((activity) => {
    activity.pop();
});

console.table(activities);

//looping over multidimensional array

// loop the outer array
for (let i = 0; i < activities.length; i++) {
    // get the size of the inner array
    var innerArrayLength = activities[i].length;
    // loop the inner array
    for (let j = 0; j < innerArrayLength; j++) {
        console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
    }
}

//or use the for each method 

activities.forEach((activity) => {
    activity.forEach((data) => {
        console.log(data);
    });
});
