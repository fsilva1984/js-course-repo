const minhaString = "Testando aqui seguro";

const lenStr = minhaString.length;

const target = 'Tes';

const lenTarget = target.length;

const lastIdxOf = minhaString.lastIndexOf(target);// zero base

const aqui = minhaString.slice(minhaString.length - 4);

const bool = lenStr - target.length > target.length;

console.log(`target word: ${aqui}`);
console.log(`length of string: ${lenStr}`);
console.log(`length of target: ${lenTarget}`);
console.log(`last index of target: ${lastIdxOf}`);
console.log(`is end position: ${bool}`);


const pattern = new RegExp(/\S\w*$/, 'gim');

const compare = minhaString.match(pattern)//pattern.test(minhaString)

console.log(compare[0]);
