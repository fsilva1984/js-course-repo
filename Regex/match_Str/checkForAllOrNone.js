
/*

No momento em que queremos verificar
se determinado caractere exinte ou não
usamos o interogação  ?

como por exemplo palavras escritas em ingles britanico
favourite e o (ingles americano favorite)
podemos testar assim 

favou?rite

ou seja, deixa o test flexivel as duas escritas 

*/

const wordBritannic = 'favourite'
const wordAmerican = 'favorite'

const check1 = wordBritannic.match(/favou?rite/)
const check2 = wordAmerican.match(/favou?rite/)


if (check1 && check2) { 

  console.log(true);
} else {

  console.log(false);
}




