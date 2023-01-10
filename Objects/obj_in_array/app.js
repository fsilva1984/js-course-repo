
const log = console.log

const h1 = document.querySelector(".title-main")

const exitCode = document.querySelector(".exit-code")

h1.textContent = "Objetos em Arrays"


const users = [
  { name: "Eli", age: 28, sex: "Male" },
  { name: "Miia", age: 46, sex: "Female", },
  { name: "Anna", age: 17, sex: "Female", },
  { name: "Joao", age: 39, sex: "Male", },
]


function destructure(obj) {

  if (obj.name) {

    exitCode.innerHTML += `<ul><li>Name: ${obj.name} - age: ${obj.age} - ${obj.sex}</li></ul>`

  }

}


users.map(destructure)


