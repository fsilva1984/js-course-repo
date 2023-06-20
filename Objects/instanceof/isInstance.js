

function Person(name, eyes, sex) {
  this.name = name;
  this.eyes = eyes;
  this.sex = sex;
}

const user = new Person("Camila", "Brown", "Fame")

console.log(user.name);

console.log(user instanceof Person);