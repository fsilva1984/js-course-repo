
/*

factoraliaze a numbers

ex: 1* 2* 3* 4* 5 = 120
*/



function factorialize(num) {
  let factorial = 1;

  for (let i = 0; i < num; i++) { 
    let n = i + 1;
    factorial *= n

  };

  console.log(factorial);
}

factorialize(10);// 3628800


