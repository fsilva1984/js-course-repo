/*
Copiando arrays com valores primitivos

 Copia superficiais
 copia apenas o 1 nivel do array

utilizando o spread o array é copiado,
mas usando a atribuicao e criado mais uma
referencia para o mesmo objeto

*/
const num = [1, 2, 3, 4, 5]

const myNum = [...num]
myNum.splice(2, 1, 6)

const numbers = num;
numbers.push(6)


console.log(numbers)
console.log(myNum)
console.log(num)


/*


*/