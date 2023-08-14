
/*
  destruir os elementos do array
  passados por parametro 
*/

function destroyer(arr, ...params) {
  /*
    Aqui retornaremos o array que o filter produz
    no retorno com os elementos do array passado
    por parametro para a funcao, que nao dao metch
    com os elementos do array de params;
    ou seja:
     "no array de params nao inclue este item ?, item que esta dentro do array que o filter esta iterando."
     
  */
  return arr.
    filter(item => ![...params].includes(item));
}

console.log(
  destroyer([1, 2, 'destroyer', 1, 2, 3, 5, 6], 2)
);
