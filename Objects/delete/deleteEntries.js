let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line
function deleteKey(obj, key) {
  let k = [...key]
  let delected = '';

  for (let i = 0; i < k.length; i++) {
    delected += delete obj[k[i]]
  }

  return delected;
}
// Only change code above this line

deleteKey(foods, ['oranges', 'plums', 'strawberries'])

console.log(foods);