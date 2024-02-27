

// **** COPIAS RASAS COM O SPREAD ****

/*
 cria um obj array na memoria (heap) e atribui
 a ele um ponteiro
 */
const arr1 = [23, 45, 32];

/*
  quando faço essa atribuição a objetos de referencia
  e criado em memoria mais um ponteiro,
  ou ceja o obj array fica com dois ponteiro
  indicando onde ele esta na memoria
*/
const arr2 = arr1;


console.log(arr2, arr1);

arr2[1] = 300;
console.log(arr2, arr1);


console.log();


// copia simples
const a1 = [30, 40, 50];

const b1 = [...a1];

console.log(a1, b1);


b1[1] = 1000;
console.log(a1, b1);



console.log();
/*

    Fazer uma copia desse maneira de um array
    de objetos usando o spread, estaremos fanzendo
    uma copia dos ponteiros obj de referencia,
    
    nesse caso se for acrescentado um item a o
    array f2 o array f1 não sera modificado
    mas se modificar um dos objetos referenciados
    em qualquer um dos dois arrays, os dois mostrarão
    o obj modificado.
*/


const f1 = [{id: 18}, {id: 21}, [true, "Yes"]];

const f2 = [...f1];

f2[3] = undefined; 
console.log(f2,f1);

f2[2][0] = false;
console.log(f2, f1);


console.log();
/*
    Uma das maneiras de criar uma copia
    total ou seja o novo objeto que
    de fato sera criado em memoria e não referenciado
    e tranforma em json e depois fazer com que
    o objeto receba o valor parsiado ou ceja tranformado
    em um objeto javascript.
*/ 
const s1 = [{ name: "João" }, { name: "Paulo" }, { name: "Abel" }];

const s2 = JSON.parse(JSON.stringify(s1));


s2[0].name = "Pedro"

console.log(s2, s1);










// const numbers = [
//     [23, 45, 32],
//     [78, 90, 68],
//     [18, 17, 16]
// ];
// const numbersOfCol =
//     numbers[0].map((_, idx) => numbers.map(row => row[idx]));

// console.log(numbersOfCol);