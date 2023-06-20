

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

car.dataCar('Black', 'Mustang');


const newCar = car.dataCar.call({
  manufacture: "Chevrolet",
  age: 1970,
}, "Yellow", "Camaro"
);

newCar;



