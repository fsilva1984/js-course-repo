

function mutation(arr) {
  let str0 = arr[0].toLowerCase();
  let str1 = arr[1].toLowerCase();
  let count = 0;
  let latter = [];
  while (count < str0.length) {

    if (str0.includes(str1[count])) {
      latter.push(str1[count])
    }
    count++
  }

  if (latter.length >= 3) {
    console.log(true);
  } else {
    console.log(false);
  }
}

mutation(["hello", "hey"])// should return false

mutation(["Mary", "Army"])// should return true.

console.log();
mutation(["Mary", "Aarmy"])// should return true.

console.log();
mutation(["Alien", "line"])// should return true.

console.log();
mutation(["floor", "for"])// should return true.

console.log();
mutation(["hello", "neo"])// should return false.

console.log();
mutation(["voodoo", "no"])// should return false.

console.log();
mutation(["ate", "date"])// should return false.




console.log("----------Solucao 2------------");



function mutation2([elem1, elem2]) {
  const regex = new RegExp(`[^${elem1}]`, 'i');
  console.log(!regex.test(elem2));
}


mutation2(["hello", "hey"])// should return false

mutation2(["Mary", "Army"])// should return true.

console.log();
mutation2(["Mary", "Aarmy"])// should return true.

console.log();
mutation2(["Alien", "line"])// should return true.

console.log();
mutation2(["floor", "for"])// should return true.

console.log();
mutation2(["hello", "neo"])// should return false.

console.log();
mutation2(["voodoo", "no"])// should return false.

console.log();
mutation2(["ate", "date"])// should return false.