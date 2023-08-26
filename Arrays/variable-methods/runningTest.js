

let numbers = [2, 4, 5, 6, 8, 9];


let filter = []
let next = '';
let lock = 0

for (let i = 0; i < numbers.length; i++) {

  let current = numbers[i]

  if (lock == 0) {
    filter[filter.length] = current;
    next += filter[i]

  }
  
}
console.log(next);
