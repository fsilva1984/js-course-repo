

class Book {

  constructor(Autor){
    this._Autor = Autor
  }


  get write(){
    return this._Autor
  }

  set write(updateAutor) {
    this._Autor = updateAutor
  }
}


const apocalipse = new Book('Joao')
//console.log(apocalipse.write)


apocalipse.write = 'Daniel'
//console.log(apocalipse.write);


class Car {
  constructor(FAC, MOD, COL, AGE) {

    this.FAC = FAC;
    this.MOD = MOD;
    this.COL = COL;
    this.AGE = AGE;
  }

  get auto() {
    return `
    ${ this.FAC }
    ${ this.MOD }
    ${ this.COL }
    ${ this.AGE }
    `
  }

  set auto(update) {

    this.FAC = update;
    this.MOD = update;
    this.COL = update;
    this.AGE = update;
  }

}

const camaro = new Car('Chevrolet', 'Camaro', 'black', '12/05/2017')
console.log(camaro.auto)



const camaroGreen = camaro.COL = 'Green'
console.log(camaro.auto);














