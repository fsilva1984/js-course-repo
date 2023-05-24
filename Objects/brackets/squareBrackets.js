
/*
Usando colchetes
*/


let fruits = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};


function checkFruits(obj, item) {
  let checked = obj[item]//get item by brackets
  return checked;
}

console.log(checkFruits(fruits, 'grapes'));
console.log();


function listItens(obj, list) {
  let l = [...list]
  let showList = '';

  for (let i = 0; i < l.length; i++) { 

    showList += ' ' + obj[l[i]]
  }
  
  return showList;
}

console.log(listItens(fruits, ['bananas', 'strawberries', 'oranges']));

console.log();

console.log(listItens(fruits, ['oranges']));














