

//define news instancy with operator new


function Car(fac, mod, col, age) {
  this.fac = fac;
  this.mod = mod;
  this.col = col;
  this.age = age;

};

Car.prototype.dataCar = function () {
  return `
      Factory: ${this.fac} Model: ${this.mod} 
      Color: ${this.col} Age: ${this.age}
    `
};

const carFusca = new Car("W.V", "Fusca", "White", "1964");

console.log(carFusca.dataCar());

