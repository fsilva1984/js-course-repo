

/*
pegar a maior palavra dentro da string
mas so serve para apenas uma chamada da funcao

*/
console.log();
console.log('----Solucao 1---');


function findLongestWordLength(str) {

  let great5 = /(\w+){5}/;
  let great6 = /(\w+){6}/;
  let great8 = /(\w+){8}/;
  let great10 = /(\w+){10}/;
  let great20 = /(\w+){10,20}/;

  let result = '';

  
  
  
  if (str.match(great20)) {
    result = str.match(great20)

  } else if (str.match(great10)) {
    result = str.match(great10)

  } else if (str.match(great8)) {
    result = str.match(great8)

  } else if (str.match(great6)) {
    result = str.match(great6)

  } else if (str.match(great5)) {
    result = str.match(great5)

  }
  console.log(result[0].length);

};

findLongestWordLength("May the force be with you");

findLongestWordLength("The quick brown fox jumped over the lazy dog");

findLongestWordLength("Google do a barrel roll");


findLongestWordLength("What is the average airspeed velocity of an unladen swallow");

findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");


console.log();
console.log('---Solucao 2----');


function findLongestWordLength2(str) {
  let longestLength = 0;
  let currentLength = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      if (currentLength > longestLength) {
        longestLength = currentLength;
      }
      currentLength = 0;
    } else {
      currentLength++;
    }
  }
  if (currentLength > longestLength) {
    longestLength = currentLength;
  }

  console.log(longestLength)
};

findLongestWordLength2("May the force be with you");

findLongestWordLength2("The quick brown fox jumped over the lazy dog");

findLongestWordLength2("Google do a barrel roll");


findLongestWordLength2("What is the average airspeed velocity of an unladen swallow");

findLongestWordLength2("What if we try a super-long word such as otorhinolaryngology");


console.log();
console.log('---Solucao 3----');

function findLongestWordLength3(str) {
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  console.log(maxLength);
}



findLongestWordLength3("May the force be with you");

findLongestWordLength3("The quick brown fox jumped over the lazy dog");

findLongestWordLength3("Google do a barrel roll");


findLongestWordLength3("What is the average airspeed velocity of an unladen swallow");

findLongestWordLength3("What if we try a super-long word such as otorhinolaryngology");


console.log();
console.log('---Solucao 4----');

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
  let num = theGreater[theGreater.length - 1]
  console.log(num);
};


findLongestWordLength4("May the force be with you");

findLongestWordLength4("The quick brown fox jumped over the lazy dog");

findLongestWordLength4("Google do a barrel roll");

findLongestWordLength4("What is the average airspeed velocity of an unladen swallow");

findLongestWordLength4("What if we try a super-long word such as otorhinolaryngology");
