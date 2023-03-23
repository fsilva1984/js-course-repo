
// Rest
function rest(...arr) {
  
  for (let i = 0; i < arr.length; i++) {
    
    console.log(arr[i]);
    
  }
}


rest(12, 34, 56)


console.log("---------------------------------------");

//Spread

const arr = [30, 22, 16, 67]
const myArr = [...arr]

console.log(myArr);

