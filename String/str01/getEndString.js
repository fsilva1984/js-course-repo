

//pegar o final da string
//similar ao method endsWith()


const text = "Testando minhas abilidades em javascript";


function myTarget(str, n) {
  const num = n.length;// comprimento de 'n'

  //extraindo os ultimos caracteres da string
  const result = str.slice(str.length - num);

  if (result === n) {
    return true;
  }

  return false;
}

console.log(myTarget('Booleans', 'ns'))

function confirmEnding(str, target) {
  // "Never give up and God will find you."
  // __Fsilva


  let re = new RegExp(target + "$", "i");

  return re.test(str);
}

console.log(confirmEnding("Bastian", "n"));