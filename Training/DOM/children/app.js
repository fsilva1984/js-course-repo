const _div = document.querySelector("._parent")


const orderly = document.querySelector(".bt-order")
const clean = document.querySelector(".bt-clean")
const disorderly = document.querySelector(".bt-disorderly")

const bts = document.querySelector(".bt-group")

const guests = [
  { name: "Flavio" },
  { name: "Henrique" },
  { name: "Bruno" },
  { name: "Paulo" },
  { name: "Gusmão" },
  { name: "Assis" },
  { name: "Vivian" },
  { name: "Nelih" },
]


function createEl(param) {

  const el = document.createElement(param)

  _div.appendChild(el)

}


bts.addEventListener("click", e => {

  if (e.target == orderly) {

    createEl("ol")

    let names = ''

    guests.forEach(item => {

      names += `<li>${item.name}</li>`
    })

    const ol = document.querySelector("ol")
    ol.innerHTML = names

  } else if (e.target == disorderly) {

    createEl("ul")

    let names = ''

    guests.forEach(item => {

      names += `<li>${item.name}</li>`
    })

    const ul = document.querySelector("ul")
    ul.innerHTML = names

  } else if (e.target == clean) {

    const li = document.querySelector("li")

    alert("clean")

    li.parentElement.remove()

  }

})






