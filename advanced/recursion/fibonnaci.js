//the first two items,
//previos two eqaul two

const fiboncaniIterative = (n) => {
  let base = [0, 1];
  for (let i = 2; i <= n; i++) {
    base.push(base[i - 2] + arr[i - 1]);
    console.log(base);
  }
  return arr[n];
};

//o(n)

fiboncaniIterative(5);

const recusriveFuncton = (n) => {
  if (n < 2) {
    return n;
  }
  return recusriveFuncton(n - 1) + recusriveFuncton(n - 2);
};

//this takes explonential time = if the number is 8 then our tree grows

// 0(2^n) really bad

// we can make this of o(n) using memorisation

//the items are one and two behind them,
