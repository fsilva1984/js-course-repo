
//completando a sequencia numerica 

let teste = [3, 6, 9, 10, 11, 12, 16, 19];

filtro = [];
anterior = '';
lock = 0;


for (x = 0; x < teste.length; x++) {

  let atual = teste[x];

  if (anterior == '') {

    filtro[filtro.length] = atual;
    anterior = teste[x]

  } else if (atual == anterior + 1) {

    filtro[filtro.length] = atual;
    lock = 1;
    anterior = teste[x];

  } else if (lock) {
    break;

  } else {

    filtro = [];
    anterior = '';
  }
}
console.log(filtro);

console.log('-----------------------------------------');

//pegando apenas os numeros sequenciaes

let arr = [3, 6, 9, 10, 11, 12, 16, 19, 20, 21, 22, 25];
let resultado = [];


//Para cada elementos da entrada...
for (let i = 0; i < arr.length; i++) {

  //inicializa a pilha com o elemento.
  let pilha = [arr[i]];

  //Aponta o primeiro candidato a consecutivo.
  let j = i + 1;

  //Para cada consecutivo...
  for (; arr[j] == pilha[pilha.length - 1] + 1; j++) {

    //Empilha o consecutivo.
    pilha.push(arr[j]);

  }

  //Se a pilha possui mais de um elemento a descarrega no resultado.
  if (pilha.length > 1) resultado.push(pilha);

  //Aponta para o ultimo elemento pesquisado.
  i = j - 1;

}


console.log(resultado);




console.log('-----------------------------------------');

//separando os numeros que estão sozinhos dos sequenciais

let array = [3, 6, 9, 10, 11, 12, 16, 19, 20, 21, 22, 25];
let result = [];

for (let i = 0; i < array.length; i++) {

  let pilha = [array[i]];

  let j = i + 1;
  for (; array[j] == pilha[pilha.length - 1] + 1; j++)
    pilha.push(array[j]);
  result.push(pilha);
  i = j - 1;
}


console.log(result);









