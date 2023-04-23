

/*

o ponto ou caractere coringa
da a possibilidade de encontrar 
padroes com mais facilidade,
porque o ponto diz que apartir dele
qualquer caractere que vier sera aceito

*/



function patterns(param) {

  const pattern = /run./

  console.log(pattern.test(param), param);
}

const test_me = "run123x, runPy, runJs, runNode, runRs"

patterns(test_me)



