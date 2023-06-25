


function Dog(name, breed) {
  this.name = name;
  this.breed = breed;

}

const myDog = new Dog("pluto", "labrador")

console.log(myDog.name, myDog.breed);


Dog.prototype.legs = 4;


console.log();

console.log(myDog.name, myDog.breed, myDog.legs);


const dog = new Dog("Mingau", "beagle");

console.log();

console.log(dog.legs);
