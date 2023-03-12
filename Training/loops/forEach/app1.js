function multiplyAll(arr) {
  let product = 1;
  
  arr.forEach(item => {

    console.log(item);
    item.forEach(val => {
      //console.log(val);
      product *= val;
    
    });
  });

 
  let newProduct = 1;
  for (let i = 0; i < arr.length; i++) {
    
    for (let j = 0; j < arr[i].length; j++) {
      newProduct *= arr[i][j];
      
    };
    
  };

  console.log("------------- forEach ----------------------");
  console.log(product);

  //console.log("------------- for --------------------------");
  //console.log(newProduct);
}

multiplyAll([[1], [2], [3]]);// 6
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);// 5040
multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]);// 54









console.log("-------------for fora da funcao---------------");
const arr = [
  [1, 2], [3, 4], [5, 6]
];

let mult = 1;

for (let i = 0; i < arr.length; i++) {
  
  for (let j = 0; j < arr[i].length; j++) {

    mult += mult * arr[i][j];
   
  };
};
//console.log(mult);


console.log("------------forEach fora da funcao-------------");
let valueOf = 0;

arr.forEach(item => {

  item.forEach(val => {

    valueOf += val;
  })
})
//console.log(typeof valueOf, valueOf);
