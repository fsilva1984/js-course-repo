
/*
  Aqui nossa função pegara as letra iniciais
  das strings, se ela iniciar com uma ou mais
  consoante elas serão jogaras para o final da string
  e adicionando adicionando 'ay':
  ex: paragrafo res: aragrafopay, shwartz res: artzshway 

  ou se a string iniciar com duas consoantes ou mais
  deve ter o mesmo tratamento.

  Para as strimgs que começão com uma ou mais vogais
  ao fina delas sera aquesentado 'way' modificando assim
  so o final da string.

*/


function translatePigLatin(str) {

  // Pega duas ou mais consoantes
  let notVowel = new RegExp(/^[b-df-hj-np-tv-z]+[^aeiou]/)
  // Pega uma ou mais vogais no inicio da strimg
  let yesVowel = new RegExp(/^[aeiou]+/)
  //pega uma consoante no inicio seguido de uma vogal
  //let consoVowel = new RegExp(/^[b-df-hj-np-tv-z][aeiou]/)
  


  if (notVowel.test(str)) {

    let num = str.match(notVowel)[0].length

    let sliced = String(str.match(notVowel))

    let slicedStart = str.slice(num)

    return slicedStart + sliced + 'ay1';

  } else if (yesVowel.test(str)) {
    return str + "way2";

  } else {

    let sliced = str[0];
    str = str.slice(1);

    return str + sliced + "ay"
  }


}

console.log(
  translatePigLatin("schwartz"),
  translatePigLatin("glove"),
  translatePigLatin("algorithm"),
  translatePigLatin("california")

);