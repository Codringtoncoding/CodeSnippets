function stringify(list) {
//go through each node in the list and get the value out to use methods on
    let ListArray = [];
    let str = '';
//  if list argument is passed and is present and thus true do a while loop 
//while list is not = to null push each .date part of the L.list into an array
    if (list) {
    while (list !== null) {
    ListArray.push(list.data);
//update the list tp = list .next on the linked list and loop through and add to array until null
    list = list.next;
//update empty sting with List array items using join method and concatioation
    str = ListArray.join(' -> ') + ' -> null';
    }
// if list array is empty return null
    } else { ListArray = [] 
    return 'null'
    } 
//when all is finished return the new string    
    return str
    console.log(`'${str}'`)
};

    //   tried to create a for each loop that does a function create arrows
    //takes array and index (counter) called an item which you can act upon
    //   result.forEach(createArrows)
    //   console.log(result)
    //   function createArrows(item, index, arr) {
    //     arr[index] = item * 2;
    //   }
    //}
//recursion methods
   
function stringifyRecursion(list)
    if (list) {
    return String(list.data) + ' -> ' + stringify(list.next);
    } else {
    return 'null'
};

function stringifyRecursionSecondMethod(list) {
    return list === null ? "null" : `${list.data} -> ${stringify(list.next)}`; 
};
     
