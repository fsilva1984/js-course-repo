

class Animal {

  // funcao constutora da class
  constructor(name, breed, eats) { 
    this.name = name;
    this.breed = breed;
    this.eats = eats;
  };

  // funcao da class construtora
  static staticMethod() { 
    console.log("class constructores");
  };

  //metodo da class instancias podem herdar
  proprertyDog() {
    console.log(`${this.name} ${this.breed} ${this.eats}`);
  };
  
};



const dog = new Animal("Pluto", "beagle", "pedigree");


dog.proprertyDog();



