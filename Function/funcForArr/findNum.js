

function getIndexToIns2(arr, num) {

  const resultSearch = arr.filter(val => val < num);
  return resultSearch.length;
}

console.log('------------Solucao 2------------');

console.log(getIndexToIns2([10, 20, 30, 40, 50], 35)); //should return 3.
console.log();

console.log(getIndexToIns2([10, 20, 30, 40, 50], 30)); //should return 2.
console.log();

console.log(getIndexToIns2([40, 60], 50)); //should return 1.