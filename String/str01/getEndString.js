
/*
  Utilizando o slice pegaremos a quantidade final
  de caracteres passados para a funcao e 
  retornamos um valor booleano
*/

const text = "Testando minhas abilidades em javascript";

function myTarget(str, n) {
  /* pegaremos o comprimento de 'n' e passaremos para o slice */
  const num = n.length;

  //extraindo os ultimos caracteres da string
  const result = str.slice(str.length - num);

  if (result === n) {
    return true;
  }

  return false;
}

console.log(myTarget(text, 'javascript'))

function confirmEnding(str, target) {
  
  let re = new RegExp(target + "$", "i");

  return re.test(str);
}

console.log(confirmEnding("Bastian", "n"));