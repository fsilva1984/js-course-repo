
/*
Encontrando padroes de forma mais flexivel

*/


const pattern = /(?=n)/gim

const text = `Nomades marelindo mobile the London`


const result = text.match(pattern)

console.log(`Foram achados ${result.length} palavras com a letra 'n'`);

