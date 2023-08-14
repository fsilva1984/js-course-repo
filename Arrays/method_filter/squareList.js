
/*
  Função recebe por parametro um array de numeros
  e devolve outro array de numeros positivos e interios
  elevados ao quadrado. 
*/
const squareList = function (arr) {

  //filtered filtered.push(
  const squareArray = [];
  arr.filter(item => {
    if (Number.isInteger(item) && item >= 0) {
      return item
    }
  }).map(item => {
    squareArray.push(item ** 2);
  });

  return squareArray;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

console.log(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]))
//should return [16, 1764, 36].

console.log(squareList([4, 'number', -9.8, 3.14, 42, null, 6, 8.34, -2, 152, true]))