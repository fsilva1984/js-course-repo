
/*

  Indicadores ^ $
 o indicador ^ procura um correspondente
 no comeco da linha,
 
 ja o $ procura correspondente no final da linha
 
 se ^pattern$ for usado juntos indica que esperamos
 que o padrao seja o unico do inicio ao fim da linha.

*/

const text1 = 'match my find testStr';
const text2 = 'testStr match my find';
const text3 = 'testStr';

console.log('----------> ^ Pattern in Start <---------');

function patternStart(y, x, z) {
  const myPattern = /^testStr/

  console.log(myPattern.test(y));
  console.log(myPattern.test(x));
  console.log(myPattern.test(z));

}


patternStart(text1, text2, text3)


console.log('----------> Pattern in End $ <---------');

function patternEnd(y, x, z) {
  const myPattern = /testStr$/

  console.log(myPattern.test(y));
  console.log(myPattern.test(x));
  console.log(myPattern.test(z));

}


patternEnd(text1, text2, text3)


console.log('---> ^ Pattern of start to the End $ <---');

function patternStartEnd(y, x, z) {
  const myPattern = /^testStr$/

  console.log(myPattern.test(y));
  console.log(myPattern.test(x));
  console.log(myPattern.test(z));

}


patternStartEnd(text1, text2, text3)

