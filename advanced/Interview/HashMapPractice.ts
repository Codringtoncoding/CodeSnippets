//given an array of [1,3,4,5] return the     of the matching piar the hits the target
//target 11

const arrayToTest = [1, 2, 5, 6, 1, 5];

const findMatch = (
  testArray: number[],
  target: number
): [number, number] | undefined => {
  let hashMap = {};

  for (let i = 0; i < testArray.length; i++) {
    let difference = target - testArray[i];
    if (hashMap[difference] !== undefined) {
      console.log(hashMap[difference]);
      return [hashMap[difference], i];
    }

    hashMap[testArray[i]] = i;
  }
};

findMatch(arrayToTest, 11);
