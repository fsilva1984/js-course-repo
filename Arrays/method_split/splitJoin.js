
function sentensify(str) {
  const arr = str.split(/[^a-zA-Z]/);
  return arr.join(' ')
}

console.log(sentensify("May-the-force-be-with-you"));
console.log(sentensify("May the^*force-be-with13you"));