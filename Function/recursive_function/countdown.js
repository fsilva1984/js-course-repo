

function countdown(n) {


  if (n <= 0) {
    return [];
  }

  const arr = countdown(n - 1)
  arr.unshift(n)


  return arr
}

//console.log(countdown(10));

console.log('----------------------------------------------');
console.log('');






function rangeOfNumbers(x, y) {


  if (x < 1 || y < 1) {
    return [];

  } else if (x === y) {

    return [x]
  }

  if (x > y) {
   let arr = rangeOfNumbers(y, x - 1)
   arr.push(x)
    return arr;

  } else if (x < y){

    arr = rangeOfNumbers(x, y - 1)
    arr.push(y)
    return arr;
  }
}

console.log(rangeOfNumbers(30, 20));






function countdown(n) {

  if (n < 1) {
    return [];
  }

  return [n, ...countdown(n - 1)];

}

console.log(countdown(10));




























