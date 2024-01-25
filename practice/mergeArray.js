const mergeSortedArray = (arr1, arr2) => {
  if (!arr1 || !arr2) {
    return 'undefined inputs';
  }

  const mergedSortedArray = [];
  console.log('🚀 ~ mergeSortedArray ~ mergedSortedArray:', mergedSortedArray);

  let count = 0;
  while (arr1 && arr2 !== undefined) {
    if (arr1[count] > arr2[count]) {
      mergedSortedArray.push(arr1[count]);
      console.log(mergeSortedArray, 'merged sorted array insed');
    }
    console.log(mergeSortedArray, 'merged sorted array outside');
    console.log(count, 'count');

    count++;
  }
  return mergedSortedArray;
};

console.log(mergeSortedArray([1, 4, 3, 2], [2, 1, 6, 7]));
