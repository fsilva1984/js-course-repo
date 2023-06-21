
/*

  Como podemos add propriedades ao
  objeto sem precisar duplicalas,
*/


function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4

let beagle = new Dog("Snoopy");
let pitbull = new Dog("Angry");
let dalmata = new Dog("Pluto");

console.log(`
${beagle.name} ${pitbull.name} ${dalmata.name}
`);

console.log();

let arrProps = [];
let prototypeProps = [];

/* com o for in, pego os nomes das chaves e
as deposito na variavel property, depois
uso a variavel para verificar se tem chaves de
propriedades no objeto com esses nomes que estao
na variavel */
for (let property in pitbull) { 

  if (pitbull.hasOwnProperty(property)) { 
    arrProps.push(property)

  } else {
    prototypeProps.push(property);
  }
}

console.log(`Propriedade definida no Object: [${arrProps}]`);

console.log();

console.log(`Propriedade definida no prototype do Object: [${prototypeProps}]`);
