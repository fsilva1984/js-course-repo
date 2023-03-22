


// simple recursive function
function countDown(n) {
  let num = 1;

  if (n <= 0) {
   
    return num - 1;
  } else {

    countDown(n -1);
  };

  console.log(n);
};

countDown(10);




// recursive in array
function sum(arr, n) {
  let product = 1;

  if (n <= 0) {
    return product - 1;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  };

};


//sum([21, 13, 45, 87], 1)


console.log("-------------------------------------------")
console.log(sum([1], 0))// 0.

console.log("-------------------------------------------")
console.log(sum([2, 3, 4], 1))// 2.

console.log("-------------------------------------------")
console.log(sum([2, 3, 4, 5], 3))// 9
