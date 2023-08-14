

function myReplace(str, before, after) {
  
  const regex = new RegExp(before);// regex
  const wold = str.match(regex);// test regex, search wold

  const upper = new RegExp(/^[A-Z]/);// regex
  const hasUpper = upper.test(wold.charAt(0));// testing first latter
  
  if () {
    
  }
  after[0].toUpperCase() + after.slice(1);

  
  return after

  //str = str.replace(wold[0], after);

  //return `\n${str}\n`;
}




console.log(
  myReplace(
    "A quick brown fox jumped over the lazy dog",
    "jumped",
    "leaped"
  ),//should return//A quick brown fox leaped over the lazy dog

  myReplace("He is Sleeping on the couch",
    "Sleeping",
    "sitting"
  ),//should return// He is Sitting on the couch.

  myReplace("I think we should look up there",
    "up",
    "Down"
  )//should return// I think we should look down there.
);



