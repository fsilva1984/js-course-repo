

function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];

  for (let j = 0; j < n; j++) {
    row.push(0);
  }

  for (let i = 0; i < m; i++) {
    newArray.push(row);
  }

  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);





function addNewine(c, r) { 

  let row = [];
  let col = [];


  for (let i = 0; i < c; i++) {
    row.push(0)
  }

  for (let j = 0; j < r; j++) {
    col.push(row);
  }
  return col;
}

//console.log(addNewine(2, 4));



