
/* 
    Uma unica instancia podendo ter o seu estado
    atualizado sempre que nessessario.
*/
import singletonInstance from './singleton.mjs';



singletonInstance.updateState({ name: 'Marcos', age: 30 });

console.log(
    singletonInstance.getState()
);


