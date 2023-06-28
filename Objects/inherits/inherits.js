
/*

duck e todas as instâncias de Bird
devem mostrar que foram construídas
por Bird e não por Animal. Para fazer isso,
você pode definir manualmente a propriedade
do construtor de Bird para o objeto Bird:

*/


function Animal() { };
function Bird() { };
function Dog() { };

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();



console.log(duck.constructor, beagle.constructor);



