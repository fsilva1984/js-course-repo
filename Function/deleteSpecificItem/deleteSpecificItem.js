/*
removendo um item especifico de um array
*/

const names = ['joao', 'Pedro', 'Miguel', 'Lucas'];

function indexName(arr, index) {
  let name = '';
  for (let i = 0; i < arr.length; i++) {
    if (index == i + 1) {
      arr.splice(i, 1);
      name = arr;
      console.log(i)
    };
  };
  return name;
};


console.log(indexName(names, 4))