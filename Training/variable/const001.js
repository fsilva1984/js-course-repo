const s = [5, 7, 2]
function editInPlace() {

  s.reverse()
  s.splice(1, 2, 5, 7)

  return s
}

//console.log(editInPlace());
//output code, [2, 5, 7]


function newAtt(arr) {

  for (i in arr) {
    s[i] = arr[i]
  }

  console.log(s);

}
newAtt([2, 5, 7]);


//s[1] = 5;
//s[0] = 2;
//s[2] = 7;
//console.log(s);



// temos de inicio um obj declarado com a keyworld "const"

const produtos = {
  nome: 'Sabonete',
  preco: 5.99,
  descricao: 'Limpa até 99% dos germes da mão'
}

console.log(produtos)


// qui atualizamos o valor que possue o a propriedade do obj 


const produtos = {
  nome: 'Sabonete',
  preco: 5.99,
  descricao: 'Limpa até 99% dos germes da mão'
}

console.log(produtos)

produtos.preco = 7.99

console.log(produtos)


// explicação

	Isso acontece porque a variável const não permite uma redeclaração dos valores, nós podemos sim alterar elementos de um array que seja declarado com const, ou alterar os valores de alguma propriedade de um objeto.

  Na verdade, isso acontece porque quando utilizamos array/objetos, armazenamos uma referência para esse array/objeto, e não o valor em si.Portanto, quando alteramos alguma propriedade no objeto, como você pontuou, você não está modificando seu valor constante, mas o objeto para o qual ele aponta(por referência).Por isso que é possível alterar objetos / array com constantes! O que não podemos, repetindo, é redeclarar o seu valor.

por Giovanna Moeller | Instrutora
iOS Software Engineer(Alura Cursos TI)