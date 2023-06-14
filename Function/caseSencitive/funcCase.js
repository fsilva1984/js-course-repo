

function titleCase(str) {
  str = str.toLowerCase();
  str = str.split(" ");
  let upperFirstCharacters = '';

  str.map(el => {
    upperFirstCharacters += " " + el.replace(el[0], el[0].toUpperCase())

  });
  return upperFirstCharacters;
}

console.log(titleCase("I'm a little tea pot"));
//I'm A Little Tea Pot

console.log();

console.log(titleCase("sHoRt AnD sToUt"));
//Short And Stout

console.log();

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
//Here Is My Handle Here Is My Spout

console.log("------------Solution 2-----------");


function titleCase2(str) {
  return str
    .toLowerCase()
    .replace(/(^|\s)\S/g, L => L.toUpperCase());
}


console.log(titleCase2("I'm a little tea pot"));
//I'm A Little Tea Pot

console.log();

console.log(titleCase2("sHoRt AnD sToUt"));
//Short And Stout

console.log();

console.log(titleCase2("HERE IS MY HANDLE HERE IS MY SPOUT"));
//Here Is My Handle Here Is My Spout

console.log();
