

const car = {
  manufacture: 'Ford',
  age: 1976,
  dataCar: function (color, model) {

    console.log(`
    ${this.manufacture} ${model}
    ${this.age} ${color}`
    )
  }
}


car.dataCar.apply({
  manufacture: "W.V",
  age: 1962,
}, ["White", "Fusca"]
)

/*
Forma diferente de fazer o mesmo
mas aqui modificamos o object
*/
car.manufacture = "W.V";
car.age = 1993;
car.dataCar("Cinza", "Gol");


