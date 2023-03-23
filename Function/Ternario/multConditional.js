
console.log('');

const arr = [];

function findGreaterOrEqual(a, b) {
  let verify = (a === b) ? "a and b are equal"
    : (a > b) ? "a is greater"
      : "b is greater";

  arr.push(verify);
}

findGreaterOrEqual(12, 26);
findGreaterOrEqual(20, 02);
findGreaterOrEqual(50, 50);

console.log(arr);

console.log('-------------------------------------------------------')
console.log('');

function checkSign(num) {

  let isInteger = (Math.sign(num) == 1) ? "Positive"
    : (Math.sign(num) == -1) ? "Negative"
      : "Zero"

  return isInteger;
}

console.log(
  `${checkSign(-20)} ${checkSign(0)} ${checkSign(20) }`
);

console.log('-------------------------------------------------------')
console.log('');

const signCheker = (num) => {

  let verify =
    (num === 0) ? "Zero"
      : (num > -1) ? "Positive"
        : "Negative";

  console.log(verify);
};

signCheker(0)
signCheker(-1)
signCheker(10)



console.log('-------------------------------------------------------')
console.log('');

const greaterOrEqual = (num) => {
  
  return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero"
};
console.log(
  greaterOrEqual(10), 
  greaterOrEqual(0),
  greaterOrEqual(-5)
);


