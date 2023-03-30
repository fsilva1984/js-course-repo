

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
console.log(apocalipse.write)


apocalipse.write = 'Daniel'
console.log(apocalipse.write);















