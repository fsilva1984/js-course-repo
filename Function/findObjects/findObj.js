

function findElement(arr, func) {
  const result = arr.find(func)
  return result;
}

console.log(findElement([1, 6, 3, 5], num => num % 2 === 0));

