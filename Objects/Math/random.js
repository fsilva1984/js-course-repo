
const $ = console.log;

const stopInterval = setInterval(rand, 1000, 0, 20)

function rand(min, max) {

  let num = Math.floor(Math.random() * (max - min) + min)
  $(num)

  if (num === 19) {

    clearInterval(stopInterval)
    return
  }

 
}


// Esplicando o nosso codigo a baixo

Math.floor(Math.random() * (20 - 10 + 1)) + 10

/*

  Primeiro observamos o Math.floor esse metodo arredonda os decimais para baixo
 ex: se temos 0.7659689 ele arredonda para 0.
 Em seguida temos o Metodo Math.random que tras o pseudo aleatorio numeros entre
 0 e 1 mas nao imprime o 1 ficando em 0.decimais.
 Entao chegamos nos numeros entre parenteses que serao resolvidos primeiro
 seguindo a ordem da matematica normal, la temos o maximo que e 20 menos
 o minimo que 10 mais 1 que e = a 11 e fora dos parenteses temos mais o minimo
 resultando em 21, seguinifica que o random trara numeros no intervalo de 10 e 20 como os decimais sera arredondado para baixo o 21 nunca sera imprimido



*/