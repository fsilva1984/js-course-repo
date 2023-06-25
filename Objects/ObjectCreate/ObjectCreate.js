
//define news instancy with Object.create()

function Car(fac, mod, col, age) {
  this.fac = "Ford";
  this.mod = "Mustang";
  this.col = "Black";
  this.age = "2018";
};

Car.prototype.dataCar = function () {
  return `
    Fabrica: ${this.fac} Modelo: ${this.mod}
    Cor: ${this.col} Ano: ${this.age}
  `
};


const mustang = Object.create(Car.prototype);


mustang.fac = "Ford";
mustang.mod = "Mustang";
mustang.col = "Black";
mustang.age = "2018";

console.log(mustang.dataCar());


/*
  definindo propriedades no objeto
  que e construido apartir do prototype
  da funcao contrutora

*/

Car.prototype = {
  constructor: Car,
  fac: "Chevrolet",
  mod: "Camaro",
  col: "Yellow",
  age: "2018",
  dataCar: function () { 
    return `
    Fabrica: ${this.fac} Modelo: ${this.mod}
    Cor: ${this.col} Ano: ${this.age}
  `
  }
};


const camaro = Object.create(Car.prototype);

console.log(camaro.dataCar());










