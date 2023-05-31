

function largestOfFour(arr) {
  let inside = [];
  for (let i = 0; i < arr.length; i++) {
    let order = arr[i].sort((a, b) => a - b);
    inside.push(order[order.length -1]);
  }
  console.log(inside)
  
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);