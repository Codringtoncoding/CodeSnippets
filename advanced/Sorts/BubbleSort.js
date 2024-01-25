// bubble sort - bubble sort up the largest value
//move up and swap them out - we bubble up the highest number
//keep looping and swap
//simple but most inefficient
const number = [1, 3, 4, 5, 2, 5];
const bubbleSort = (arr) => {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    console.log(i, "outerloop");
    for (let j = 0; j < length; j++) {
      console.log(j, "il");
      if (arr[j] > arr[j + 1]) {
        //lets swap number
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

console.log(bubbleSort(number));
