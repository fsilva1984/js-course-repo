
/*
  Capturaremos os valores passados
  no segundo parametro para a funcao

*/


function whatIsInAName(collection, source) {
  /*array com as keys dos objetos do segundo parametro*/
  const _keys = Object.keys(source);

  /* a funcao retorna os itens do array collection
  que passarem no teste do every:
  ou seja o every ira testar se o indece do argumento
  do filter e igual ao indice do argumento do source. */
  return collection
    .filter(obj => _keys.every(i => obj[i] == source[i]));
}

console.log(
  
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }

    ], { last: "Capulet" }
  )

);
