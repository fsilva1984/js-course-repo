
/*
Aqui atribuiremos
um par para cada letra 

*/



function pairElement(str) {
  const receive = [];

  for(let i = 0; i < str.length; i++){
    if (str[i] === 'G') {
      receive.push([str[i], "C"])

    } else if (str[i] === 'C') {
      receive.push([str[i], "G"])

    }  else if (str[i] === 'A') {
      receive.push([str[i], "T"])

    } else if (str[i] === 'T') {
      receive.push([str[i], "A"])
      
    }

  }

     
  return receive;
}

console.log(
pairElement("GCG")

);