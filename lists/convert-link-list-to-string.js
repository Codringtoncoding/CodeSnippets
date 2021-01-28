function stringify(list) {
    //go through each node in tlist and get the value out
      let ListArray = [];
      let str = '';
      if (list) {
      while (list !== null) {
        ListArray.push(list.data);
        list = list.next;
        str = ListArray.join(' -> ') + ' -> null';
        }
      } else{ ListArray = [] 
        return 'null'
        } 
      return str
      console.log(`'${str}'`)
    }

    //   tried to create a for each loop that does a function create arrows
    //takes array and index (counter) called an item which you can act upon
    //   result.forEach(createArrows)
    //   console.log(result)
    //   function createArrows(item, index, arr) {
    //     arr[index] = item * 2;
    //   }
    //}
    
    
    function stringifyRecursion(list)
      if (list) {
       return String(list.data) + ' -> ' + stringify(list.next);
      } else {
       return 'null'
     }

    function stringifyRecursionSecondMethod(list) {
        return list === null ? "null" : `${list.data} -> ${stringify(list.next)}`; 
      }
      
