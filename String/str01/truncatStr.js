
/*
Truncat string
*/

function truncateString(str, num) {

  let string = '';
  
  if (str.length <= num) {
    
    return str;

  } else {
    for (let i = 0; i < num; i++) {
      string += str[i];
    }
  }

  return string + '...';
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 6));

console.log(truncateString("A-tisket a-tasket", "A-tisket a-tasket".length));

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));


