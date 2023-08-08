const str = 'Extraindo string dentro de textos em javascript'


function extractingWord(string) {

  const pattern = new RegExp(/\S\w*$/, 'gim');

  const extracted = string.match(pattern);

  return extracted[0];

}

console.log(extractingWord('javascript'))