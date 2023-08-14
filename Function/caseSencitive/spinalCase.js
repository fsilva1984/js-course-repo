
/*
  Aqui iremos verificar se a string contem espaços
  se nao pegar pela primeira letra maiuscula de cada
  palavra
*/



function spinalCase(str) {
  let string = '';

  for (let i = 0; i < str.length; i++) {
    
    /* aqui separamos a string apartir da letra maiuscula
     se estiverem todas juntas */
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    //aqui trocamos os espacos por traco
    string += str[i].replace(/\s+|\_/, "-")
 
  }
  
  return string.toLowerCase();
}

console.log(

  spinalCase('This Is Spinal_Tap'),
  "/",
  spinalCase("thisIsSpinalTap")

);
