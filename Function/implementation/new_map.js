

const array = ["One", "Two", "Three", "Four", "Five"];
const arrNum = [2, 34, 56, 7, 18];


/*
  No prototype de Array,
  definimos um metodo myMap,
  funcao anonima que recebe outra funcao por
  parametro, e o retorno dessa funcao e passada
  para o metodo push() que empurra dentro de um
  array
*/
Array.prototype.myMapp = function (callback) {
  const newArr = [];
  /*
    O loop for vai iterar o array,
    para quem ele esta sendo passado,
    aqui representado pelo this.
  */
  for (let i = 0; i < this.length; i++) {
    /*
      A funcao de callback que foi passado
      para o metodo, vai tratar os dados recebidos
      do array que esta sendo representado pelo this
      e retornara para o metodo push.
    */
    newArr.push(callback(this[i], i, this));
  }
  return newArr;
}

console.log(array.myMapp((item, index) => {
  return `${index + 1} ${array}`
}));