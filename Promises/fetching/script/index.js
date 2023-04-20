

/*

NOTA: se quiser parar uma aplicacao , o return tem que ser no else 

a logica precisa ser assim: 

if ( TRUE ) { 
  **FACA ISSO
 
} else { 

  ** RETURN
}

*/



const form = document.querySelector("#form")

const name = document.querySelector("#inp-1")
const email = document.querySelector("#inp-2")
const passwd = document.querySelector("#inp-3")
const tel = document.querySelector("#inp-4")
const zip = document.querySelector("#inp-5")
const num = document.querySelector("#inp-6")
const ref = document.querySelector("#inp-7")
const street = document.querySelector("#inp-8")
const region = document.querySelector("#inp-9")
const city = document.querySelector("#inp-10")

function dataErro() {
  alert("Cep invalido")
}

form.addEventListener("submit", evn => {
  evn.preventDefault()



  const url = `https://viacep.com.br/ws/${zip.value}/json/`

  fetch(url).then(Response => Response.json())
    .then(data => {

      if (!data.erro) {
        setAdress(data)
      
      } else {

        dataErro()
      }

      console.log(data.erro);

    }).catch(erro => {
      throw new Error("Erro, nao foi possivel comunicação com o servidor", erro)
    })



})


function setAdress(_data) {

  const pattern = /^[0-9]{8}$/gm

  if (!pattern.test(zip.value)) {
    alert("O CEP deve ter 8 digitos Numericos !")



  } else {

    street.value = _data.logradouro;
    region.value = _data.bairro;
    city.value = _data.localidade;

  }

}



