
/*Regex
Essa regex /\/resourceGroups\/(.*)\/providers\// pegará o que está entre /resourceGroups/ e /providers/ por meio de um grupo (.*) */


function wordMiddle(word) {
  let texto = `/9c2a1079-35f0-4298-9eb3-7f63903f2ae1/resourceGroups/${word}/providers/`

  const expressao = /\/resourceGroups\/(.*)\/providers\//

  console.log(texto.match(expressao)[1]);
}

wordMiddle('AnyWord')