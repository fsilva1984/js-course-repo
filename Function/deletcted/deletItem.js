

/*
 Delete items in arrays
*/

const names = [
  'Antonio',
  'Beatriz',
  'Angela',
  'Maria',
  'Noemmy',
  'Anna',
]

function deleteItem(arr, nItems) {
  const newArr = [...arr]
  for (let i = 0; i < nItems; i++) { 

    newArr.shift()
  }

  return newArr;
}

console.log(deleteItem(names, 12));
//console.log(names);

