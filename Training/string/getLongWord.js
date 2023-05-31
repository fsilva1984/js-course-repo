
function compareFn(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}



function findLongestWordLength4(str) {
  let words = str.split(' ');
  let arr = [];

  for (let i = 0; i < words.length; i++) {

    arr.push(words[i].length);
  };
  let theGreater = arr.sort((a, b) => a - b)
  let num = theGreater[theGreater.length -1]
  console.log(num);
};


findLongestWordLength4("May the force be with you");

findLongestWordLength4("The quick brown fox jumped over the lazy dog");

findLongestWordLength4("Google do a barrel roll");

findLongestWordLength4("What is the average airspeed velocity of an unladen swallow");

findLongestWordLength4("What if we try a super-long word such as otorhinolaryngology");
