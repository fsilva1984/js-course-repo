


const numbers = [32, 45, 67, 98, 13, 46, 58, 39]

// aqui usamos o spread para nao modificar o array original
const newArray = [...numbers ]
const orderNumbers = newArray.sort((a, b) => a - b)



console.log(orderNumbers);
console.log(numbers);
/*

  O metodo sort re-ordena os itens de um array
 no caso da funcao scrita acima, se a - b = numero negativo
 esse ira tomar a primeira posicao, se a - b = numero positivo
 tomara as ultimas posicoes, se a - b = 0 nada vai mudar
 os itens continuarao em suas mesmas posicoes. 

*/









const theBiggerScore = ""

const gamerUser = [

  { name: 'John', score: 300 },
  { name: 'Julia', score: 804 },
  { name: 'Noeh', score: 512 },
  { name: 'Jonh', score: 610 },
  { name: 'Julia', score: 400 },
  { name: 'Jonh', score: 505 },
  { name: 'Noeh', score: 307 },
  { name: 'Noeh', score: 800 },
  { name: 'Julia', score: 450 },
]


const getScore = [ ...gamerUser ].sort((a, b) => {

  if (a.score > b.score) {

    return -1

  } else if (a.score < b.score) {

    return 1
  }

  return 0
})

console.log(getScore);

console.log(gamerUser);






