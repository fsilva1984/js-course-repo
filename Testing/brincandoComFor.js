
const names = ['Silvia', 'Rodrigo', 'Plinio', 'Ivan', 'Annayuio'];


// push() estrutura de fila
// unshift() estrutura de pilha

for (let index = 0; index < names.length; index++) {
  console.log(`<li>${names[index]}</li>`); 
}

if (names.length > 5) {

  console.log(names);
} else {
  
  console.log('Array deve ser maior que 5');
}

function verifyArray(arr) {

  for (let index = 0; index < arr.length; index++) {
    
    if (arr[index].length % 2 == 0) {
  
      console.log(`par: ${arr[index]}`);
    } else { 
      console.log(`impa: ${arr[index]}`);
    }  
    
  }

}
verifyArray(names);
console.log(" ");

function pulaValor(arr) {

  for (let index = 0; index < arr.length; index++) {

    if (arr[index].length % 2 != 0) {
      continue
    } else {
      console.log(`par: ${arr[index]}`);
      //console.log(`impa: ${arr[index]}`);
    }

  }

}
pulaValor(names);