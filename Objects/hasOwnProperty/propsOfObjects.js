

const duck = {
  name: "Donald",
  legs: 2,
  color: "white",
}

let propsOfDuck = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    propsOfDuck.push(property);
  }
}

console.log();
console.log(propsOfDuck);

