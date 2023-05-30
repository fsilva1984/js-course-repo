/*

Converte celsius para fahrenheit.
formula: Graus cel. 30 * 9/5 + 32
*/


function convertCelsius(n) {
  return n * 9 / 5 + 32
}

convertCelsius(32)


// function reverse string

function reverseString(str) {
  let showReverse = [...str]
  return showReverse.reverse().join('');
}

reverseString("! olleh")