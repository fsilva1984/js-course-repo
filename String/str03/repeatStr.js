
/*
 * Repeate a str

*/

function repeatStringNumTimes(str, num) {

  let string = '';

  for (let i = 0; i < num; i++) {

    string += '\n' + str;
  }

  return string;

};
console.log('\n',
  repeatStringNumTimes("*", 3), repeatStringNumTimes("Flavio", 3)
);
console.log(repeatStringNumTimes("*", 3));
