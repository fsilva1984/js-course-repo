
// simple recursive function
const numbers = [23, 45, 17, 90, 72, 13];

function countDown(arr, n){

  if (n > 0) {
    
    countDown(arr, n -1)
    return arr[n -1]
  }

  
};

//console.log(countDown(numbers, numbers.length));
console.log("------------------------------------------");

/* Iterating Arrays whith recursive function*/


function mult(arr, n) {
  let num = 0
  let product = 1
  if (n <= 0) {
    /* se o parametro "n" e menor ou igual a 0 
    a variavel produto menos 1 sera retornado */

    return product -1;
  } else {
    
    /* caso contrario a funcao sera chamada ate que
    n -1 seja igual a 0 */


    mult(arr, n -1)
    return (n) * arr[n - 1]
    
    /* nessa parte da funcao, sera multiplicado o valor
    contido no indice do arrai replesentado pelo n -1,
    pelo valor de n */
 
  }

}

console.log(mult(numbers, 0));
console.log(mult(numbers, 3));





