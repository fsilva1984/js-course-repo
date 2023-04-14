
const bt = document.querySelector("#bt")

const name = document.querySelector("#c-1")
const email = document.querySelector("#c-2")
const pass = document.querySelector("#c-3")
const confirm = document.querySelector("#c-4")
const cep = document.querySelector("#c-5")
const num = document.querySelector("#c-6")

const street = document.querySelector("#c-7")
const region = document.querySelector("#region")
const city = document.querySelector("#c-8")
const state = document.querySelector("#c-10")

function caseErro(param) {

  const pattern = /^[0-9]{8}$/gm;

  if (pattern.test(param)) {

    fetchingCep(cep.value)
  } else {

    alert("O Cep deve ter 8 digitos numericos")
  }

}


function fieldEmpaty() {

  new Array(name, email, pass, confirm, cep, num)
    .map(el => {

      if (el.value == "") {
        el.style.boxShadow = `1px 1px 1px 3px rgb(238, 28, 28)`;

      } else {

        caseErro(cep.value)
      }
    })

 
}


async function fetchingCep(param) {

  const url = `https://viacep.com.br/ws/${param}/json/`;
  const search = await fetch(url)
  const data = await search.json()

  if (!data.erro) {

    street.value = data.logradouro;
    region.value = data.bairro;
    city.value = data.localidade;
    state.value = data.uf;

  } else {

    alert("Cep invalido.")
  }

  console.log(data)

}




bt.addEventListener("click", evn => {
  evn.preventDefault()
  fieldEmpaty()
  
})



