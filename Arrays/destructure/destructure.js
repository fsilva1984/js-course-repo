let a = 8, b = 6;

[a, b] = [b, a]

console.log(a, b)


console.log("---------------------------------------");



const numbers = [1, 2, 3, 4, 5]

const [x, y, , , z] = numbers

console.log(x, y, z);



console.log("---------------------------------------");


const nestedArr = [ [1, 2, 3], [6, 5, 4], [7, 8, 9] ]


const destructure =[e, d, c] = nestedArr[1]

console.log(c, d, e);

console.log(destructure);








