
/*
 Aqui pegaremos a string no argumento da funcao
 trocaremos os separadores e a jogaremos em um array
*/

function splitify(str) {
  const accepted = str.split(/\s|\W|\d/)
  return accepted.filter(item => { 
    if (item != '') {
      return item
    }
  });

}

console.log(splitify("Hello World,I-am code"));
console.log(splitify("Hello{3}World,I-am$%code56with/3Javscript"));