


function filteredArray(arr, elem) {
 
  let endArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) === -1) {
      endArr.push(arr[i])
    }
  }
  return endArr;
}

console.log(filteredArray(

  [[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]],

  13))


