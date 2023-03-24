
// destructure
const car = {

  manufacture: "Ford",
  strength: "2.0",
  color: "red",
  age:  "18/05/2018"
}


const { manufacture, color, age } = car;

console.log(`
  marca / ${manufacture}
  cor  / ${color}
  ano / ${age} 
`);

console.log("------------------------------------");

// assignment by destructuring

const { manufacture: fabricante, age: ano, color: cor} = car


console.log(`
  marca / ${fabricante}
  cor  / ${cor}
  ano / ${ano} 
`);
