

function countdown(n) {
  

  if (n <= 0) {
    return [];
  }
  
  const arr = countdown(n -1)
  arr.unshift(n)


  return arr
}

//console.log(countdown(10));

console.log('----------------------------------------------');
console.log('');



function rangeOfNumbers(startNum, endNum) {

  let n = Math.floor(Math.random() * (endNum - startNum) + startNum) + 1

  if (n == 20) {
    return
  } else {
    console.log(n);
  }

}

//setInterval(rangeOfNumbers, 800, 10, 20)

//console.log(rangeOfNumbers(20, 10));


function countdown(n) {
  let num = 1
  if (n <= 0) {
    return num -1
  } else {

    countdown(n -1)
  }

  console.log(n);

}

countdown(10)




























