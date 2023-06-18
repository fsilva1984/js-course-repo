function filteredArray(arr, elem) {
  let newArr = [...arr];
  let endArr = [];

  for (let i = 0; i < newArr.length; i++) {

    if (newArr[i].indexOf(elem) === -1)

      endArr.push(newArr[i])
  }


  console.log(endArr);
}

filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 26)