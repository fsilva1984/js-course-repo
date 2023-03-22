
const $ = console.log;

function num(min, max){
  return Math.floor(Math.random() * (max - min )) + min
}

$(num(2, 0))


function rand1() {
  return Math.random() - 1 + 10
}

//$(rand1())


let number = Math.random() * (0 * 1) + 1

let parsead = Number.parseInt(number)

//$(parsead)

//$(number)

function randomFraction(n) {
  let float = Math.random() * n;

  let num = Math.random() * n;
  let parsed = Number.parseInt(num);

  console.log(Number.isInteger(float));
  console.log(typeof parsed);
  console.log(Number.isInteger(parsed));
  return parsed

}


//$(randomFraction(10))


//$(Math.random() *  1 + 23, ", Decimal")
//
//$(Math.ceil(Math.random() * 1 + 23), ", Rounded to up")
//
//$(Math.floor(Math.random() * 1 + 23), ", Rounded to Down")