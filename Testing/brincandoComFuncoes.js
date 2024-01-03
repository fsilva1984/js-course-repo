

function sum(a = 0, b = 0) {
  return a + b;
}

function sub(a = 0, b = 0) {
  return a - b;
}

function div(a = 0, b = 0) {
  return a / b;
}
console.log(sum(53, 18),);
console.log(sub(78, 13));
console.log(sum(53, 18) + sub(78, 13));
console.log(div(sub(78, 13), sum(53, 18)));


let number = 77;

// funcao espera recebe outra funcao por parametro.
const myFun = callback => {
  callback(number)
};

// outra funcao e passada como argumento.
myFun(number => {
  console.log(number);
})


const numbers = [16, 27, 83, 28, 45, 67];


let total = 0;
const control = val => {
  total += val;
};

numbers.forEach(control);

console.log(total);


function myReduce(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  };

  return total;
}

console.log(myReduce(numbers));


























