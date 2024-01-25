const addTo80 = () => {
  console.log("long time");
  return n + 80;
};

let cache = {
  //5: 85
};
function memoizedAddTo80(n) {
  // similar to doing cache.n
  if (n in cache) {
    console.log(cache[n], "cache[n");
    console.log(cache.n, "cache.");

    //or cache.n
    return cache[n];
  } else {
    console.log("long");
    cache[n] = n + 80;
    console.log(cache.n, "cache.");

    return cache[n];
  }
}

console.log("1,", memoizedAddTo80(10));
console.log("2,", memoizedAddTo80(10));

//how to we improve this we don't want to fill the cache to live in the global scope

//we can can use closures
function memoizedAddTo80(n) {
  //we can do this but it resets cache
  let cache = {
    //5: 85
  };

  //we can return a fucntion to avoid this problem
  return function (n) {
    if (n in cache) {
      console.log(cache[n], "cache[n");
      console.log(cache.n, "cache.");

      //or cache.n
      return cache[n];
    } else {
      console.log("long");
      cache[n] = n + 80;
      console.log(cache.n, "cache.");

      return cache[n];
    }
  };
  // similar to doing cache.n
}

//making the fibonacci better

function fin(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

//really bad it is o(2^n)

//we can make it more efficeint by 0(N)

//the solution to each sub problem is sub optioma

//there is lots of repeated calculations

//we can memoisate alot of calcuations

//every time we ask for numbers

//there is a set of roles

//think of dynamic programmnig

//divind + conquer + memoization

const fibMaster = () => {
  let cache = {};
  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
};

//this is case are its 0(N)

//we increaseed the sspace complexity

const fasterFib = fibMaster();

console.log(fasterFib(10));

//another way of icorporating dynamic programming from the buttom up
//avoids recursion
//start from the simplieese
function fibmaster2(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
}
