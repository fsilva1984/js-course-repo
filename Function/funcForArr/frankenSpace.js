

function frankenSplice(arr1, arr2, n) {
  
  //fatiado a parte da frente, de 0 ate n
  const x = [...arr2].slice(0, n)

  //aqui pegamos o que resta do array
  const y = [...arr2].slice(n, arr2.length)
  
  
  const arr = []

  arr.splice(0, 0, ...x)
  arr.splice(n, 0, ...arr1)
  arr.splice(arr.length, 0, ...y)
  return arr
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

console.log();

console.log(
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 1)
);

console.log();
console.log('------------Opcao 2---------');
console.log();

function frankenSplice2(arr1, arr2, n) {

  //fatiado a parte da frente, de 0 ate n
  const x = [...arr2].slice(0, n)

  //aqui pegamos o que resta do array
  const y = [...arr2].slice(n, arr2.length)

  const arr = [...x, ...arr1, ...y]

 console.log(arr);
}


frankenSplice2(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 1)

console.log();

frankenSplice2([1, 2, 3], [4, 5, 6], 1)



