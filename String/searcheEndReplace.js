
/*
 procurar e fazer a troca de palavras dento
 da string passada para a funcao

*/

function myReplace(str, before, after) {

  const result = str.match(before)

  if(/^[A-Z]/.test(before)){
    
    after = after.replace(/^\w/, after[0].toUpperCase())
   
  } else{
    after = after.replace(/^\w/, after[0].toLowerCase())
  }

  str = str.replace(result[0], after)
  console.log(str);
  
}

myReplace("Let us go to the store", "store", "mall")

myReplace("He is Sleeping on the couch", "Sleeping", "sitting")

myReplace("I think we should look up there", "up", "Down")