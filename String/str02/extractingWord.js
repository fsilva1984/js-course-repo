const str = 'Extraindo string dentro de textos em javascript'


function extractingWord(string, target) {

  const pattern = new RegExp(/\S\w*$/, 'gim');

  const extracted = string.match(pattern);

  return extracted[0];

}

extractingWord(str, 'javascript')