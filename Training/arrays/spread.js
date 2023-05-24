

function copyMachine(arr, num) {
  let newArr = [...arr];
  let endArr = [];
  while (num >= 1) {
  
    endArr.push(newArr)
    num--;
  }
  return endArr;
}

console.log(copyMachine([true, false, true], 2));
console.log(copyMachine([1, 2, 3, 4, 5], 5));