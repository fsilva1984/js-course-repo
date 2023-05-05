

/*

Quando precisamos testar uma serta
quantas vezes um determinado caractere
ou palavra se repete
podemos usar o quantificador da regex

ex: Oh{3} // Verificação especifica
testa se ah tres 'h's dentro da palavra 


ex: Oh{3,6} // Verifica se ah de tres
a seis 'h's dentro da palavra


ex: Oh{3,} // Verifica se ah no minimo
tres 'h's dentro da palavra quanto a 
quantidade maxima e indefinida


*/


const testH = 'Ohhhhhhhh no'


console.log(testH.match(/Oh{3}/));

console.log(testH.match(/Oh{3,6}/));

console.log(testH.match(/Oh{3,}/));

