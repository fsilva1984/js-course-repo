

/*

Copia profunda 
*/

const arrays = [ ['Ana', 'Pedro',], ['Ramon', 'Inez',[1, 2, 3, 4] ] ]


// copia so o identificador que aponta para o arquivo na stack

/*
console.log("----------- Method Assignment [X] ------------");
console.log('');
const copyWithAssignment = arrays

copyWithAssignment[1][2][3] = 5

console.log(copyWithAssignment);
console.log(arrays);
*/


/*
 faz uma copia mas raza pois se modificar o obj a copia tambem e
 modificada isso porque o metodo nao faz copias aninhadas
*/


/*
console.log("----------- Method Spread [X] ----------------");
console.log('');
const copyWithSpread = [...arrays]

copyWithSpread[1][2][3] = 5

console.log(copyWithSpread);
console.log(arrays);
console.log(copyWithSpread === arrays);
*/


/*

O metodo faz copias aninhadas mas pode falhar,
pois se trata de um metodo nao convencional

*/


console.log("----------- Method JSON [✓] ------------------");
console.log('');
const copyWithJSON = JSON.parse(JSON.stringify(arrays))

copyWithJSON[1][2][3] = 5

console.log(copyWithJSON);
console.log(arrays);
console.log(copyWithJSON === arrays);




