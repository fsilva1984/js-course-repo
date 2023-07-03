
// Encapsulamento de todo o codigo

(function () { 


  function Car(factory, model, color, age) {
    this.factory = factory;    
    this.model = model;
    this.color = color;
    this.age = age;
  };

  Car.prototype.dataCar = function() {

    return `
    Veiculo:
    Fab: ${this.factory} Mod: ${this.model} 
    Cor: ${this.color} Ano: ${this.age}`
  };

  const mustang = new Car('Ford', 'Mustang', 'Preto', '07/2022')
  
  console.log(mustang.dataCar());



})();

console.log(' ');

(function () { 

  class Car { 
    constructor(factory, model, color, age) { 
      this.factory = factory;
      this.model = model;
      this.color = color;
      this.age = age;
    };
  };


  Car.prototype.dataCar = function () {

    return `
    Veiculo:
    Fab: ${this.factory} Mod: ${this.model} 
    Cor: ${this.color} Ano: ${this.age}`
  };

  const camaro = new Car('Chevrolet','Camaro','Amarelo','05/2018');

  console.log(camaro.dataCar());

})();
