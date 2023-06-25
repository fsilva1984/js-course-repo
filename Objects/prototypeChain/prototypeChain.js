
/* 
 * Cadeia de prototype, e como acessar
*/


function Bird(name, breed){ 
  this.name = name;
  this.breed = breed;
}

Bird.prototype.dataBird = function () { 
  console.log(`${this.name} ${this.breed}`);
}
const pardao = new Bird("EatEat", "Cleanner")

// pardao e igual a Bird?
console.log(pardao.prototype == Bird.prototype);

//pardao recebeu atributos de Bird?
console.log(Bird.prototype.isPrototypeOf(pardao));

//Object recebeu atributos de Bird?
console.log(Object.prototype.isPrototypeOf(Bird.prototype));

console.log('');

pardao.dataBird();










