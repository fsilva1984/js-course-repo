
// simple recursive function

function countDown(n){

  if (n -1 > 0) {
    
    countDown(n -1)
  }

  console.log(n);
};

countDown(5);
console.log("------------------------------------------");

/* Iterating Arrays whith recursive function*/

const numbers = [23, 45, 17, 90, 72, 13];


function mult(arr, n) {// a funcao e invocada
  if (n == 0) {
    n = 1;
  };

  if (n >= 0) {// se o parametro "n" e maio ou igual a 0
    
    /* Entao log o cada conteudo do array usando como indice 
    o "n", colocamos menos 1 para que o indice comece em 1 */
    console.log(arr[n -1]);
    return// quando o if atestar false o return para a aplicacao
  }

  mult(arr, n -1);
}

//mult(numbers, 0);
mult(numbers, 0);



























