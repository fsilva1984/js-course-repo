

function Dog(name, breed, eats) {
  this.name = name;
  this.breed = breed;
  this.eats = eats;
};

Dog.prototype = {
  constructor: Dog,
  describe: function () {
    console.log(`${this.name} ${this.breed} ${this.eats}`);
  }
}

const myDog = new Dog("Pluto", "beagle", "portion");

myDog.describe();








