
//fatiando entre start e end
const str = 'The quick brown fox jumps over the lazy dog.';
const otherStr = str;

const index = 9;

console.log(str.slice(index, str.length));
console.log(otherStr.slice(-otherStr.length, -index));