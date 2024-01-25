//zero becomase the smallest item

//selection sort

//red is smallest item
//when we ecnovunter we keep going
//we move zero the first item in our list
//worst time complexity

const numbers = [1, 3, 2, 5, 1];

const selectionSort = (arr) => {
  const length = arr.length;
  if (length === 0) {
    return;
  }

  for (let i = 0; i < length; i++) {
    //set current index as minimum first item becomse the mimun
    let min = i;
    let temp = arr[i];

    for (let j = i + 1; j < length; j++) {
      if (arr[j] > arr[min]) {
        //update minimum if current is lower then we had previously so indexc is where the new one is
        min = j;
      }
    }
    //swap the values and increase
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
};
