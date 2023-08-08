

/*
  Retornaremos a soma dos numeros
  que forem passados para array inclusive
  os intervalos entre os numeros:
   ex: [1,4] soma 1 + 4, mais 2 + 3 que
   sao os intervalos entre 1 e 4 total: 10
*/


function sumAll(arr) {
  let values = [];
 /* se o array no ponto inicial e maior que no ponto final
 entao vamos incrementar o numero ate que chegue ao valor
 do ponto inicial
 */
  if (arr[0] < arr[arr.length - 1]) {
    
    let i = arr[0];
    while (i <= arr[arr.length - 1]) {
      values.push(i);
      i++
    };
    /*caso contrario decrementamos o valor ate que chegue
    ao valor final do array */
  } else if (arr[0] > arr[arr.length - 1]) {

    let i = arr[0];

    while (i >= arr[arr.length - 1]) {
      values.push(i);
      i--
    };
  };
  //por fim somamos todos os valores depositados em nosso array.
  return values.reduce((a, b) => a + b);
}

const numbers = [10, 5];


console.log(sumAll(numbers));

