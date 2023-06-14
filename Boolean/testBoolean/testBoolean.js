

function bouncer(arr) {

  const falsy = ["", 0, false, null, undefined, NaN]
  const val = [];

  for (let i = 0; i < arr.length; i++) {

    if (!falsy.includes(arr[i])) {
      val.push(arr[i])
    }

  };

  if (val.length < 1) { 
    return [];
  }

  return val;
}

console.log(bouncer([7, "ate", "", false, 9]));

console.log();

console.log(bouncer([false, null, 0, NaN, undefined, ""]));



console.log('----------Solucao 2----------');


function bouncer2(arr) {
  return arr.filter(Boolean);
}



console.log(bouncer2([7, "ate", "", false, 9]));

console.log();

console.log(bouncer2([false, null, 0, NaN, undefined, ""]));
