
//Maquinade cafe
import { cupsCoffee } from "./cupCoffee.mjs";
const coffeeMachine = (() => {
  
  return (n) => cupsCoffee(n)
 
})();

console.log(coffeeMachine(10));
