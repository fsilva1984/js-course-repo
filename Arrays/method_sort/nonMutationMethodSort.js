const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  const array = [...arr];
  return array.sort(function (a, b) { return a - b });
}

console.log(nonMutatingSort(globalArray));
console.log(nonMutatingSort([1, 30, 4, 21, 100000]));
console.log(nonMutatingSort([140000, 104, 99]));