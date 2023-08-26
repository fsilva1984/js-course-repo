


function fearNotLetter(str) {
  /*  AQUI OBTEREMOS UM RANGE ENTRE A PRIMEIRA E ULTIMA 
  LETRA DA STRING QUE FOI PASSADA PARA A FUCNAO */
  let reference = [];
  let startLetter = str[0].charCodeAt()
  let endLetter = str[str.length - 1].charCodeAt()
  while (startLetter <= endLetter) {
    reference.push(startLetter++);
  }
  /* COM ESSE RANGE ARMAZENADO EM UM ARRAY PODEMOS
  FAZER UM TESTE COMPARATIVO USANDO O INDEXOF, O QUE RETORNAR
  -1 E O QUE FALTA NA STR*/

  let missingLetter = [];
  const arr = [];

  /* ARMAZENAMOS CADA LETRA DA STR EM UM ARRAY PARA MELHOR
  MANIPULAR, NO TESTE COMPARATIVO */
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i].charCodeAt())
  }

  /* COMPARAMOS OS ITENS E O QUE RETORNA -1, ESSE ITEM 
  SERA TRANFORMADO EM UM CARACTER REPRESENTAVEL JA QUE ESTAMOS 
  COMPARANDO OS CHARACTER-CODE*/
  reference.map(item => {

    if (arr.indexOf(item) == -1) {
      missingLetter.push(String.fromCharCode(item))
    }
  });

  /* CASO TODAS PASSEM NO TESTE ENTAO O ARRAY VIRA VAZIO
  ONDE RETORNAMOS UNDEFINED */
  if (missingLetter.length == 0) {
    return undefined
  }

  return `${missingLetter}`
}

console.log(
  fearNotLetter("abce"),
  fearNotLetter("stvwx"),
  fearNotLetter("abcdefghjklmno"),
  fearNotLetter("abcdefghijklmnopqrstuvwxyz")
);








/*


      reference[i] == arr[i],
      reference[i],
      arr[i]


  let references = "abcdefghijklmnopqrstuvwxyz"
  let missingLetter = '';
  const arr = [];

*/


///  ** DESSA LINHA
// let n = references.indexOf(str[0])
// let index = n + i;
// references[index]
/* ATE ESSA LINHA, PEGAREMOS O INDICE DE
CADA LETRA DA STRING DE REFERENCIA PARA COMPARAR
COM A STRING PASSADA PARA A FUNCAO.
*///


