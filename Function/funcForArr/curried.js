
/*
  funções que retornam funções 

*/

function add(x) { 
  return (y) => (z) => x + y + z;
}

const runner = add(10)(20)(30);

console.log(runner);
