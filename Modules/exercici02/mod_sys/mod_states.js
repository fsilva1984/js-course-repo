
// show data
function showData(param) {
  const name = document.querySelector("#c-1")
  const email = document.querySelector("#c-2")
  const street = document.querySelector("#c-7")
  const region = document.querySelector("#region")
  const city = document.querySelector("8")
  const state = document.querySelector("#c-10")

  street.value = param.logradouro;//rua
  region.value = param.bairro;// bairro
  city.value = param.localidade;// cidade
  state.value = param.uf;// estado

}


// fetching by cep
async function fetchCep(param) {

  const url = `https://viacep.com.br/ws/${param}/json/`

  const fetching = await fetch(url);
  const data = await fetching.json()

  try {

    if (!data.erro) {
      showData(data)

    } else {
      throw new Error("Cep invalido. !")
    }
  } catch (error) {
    alert(error.message)
  }


}

//validation field CEP
function validationCEP(el) {

  const pattern = /^[0-9]{8}$/;

  try {

    if (pattern.test(el.value)) {
      fetchCep(el.value)

    } else {
      throw new Error("O CEP precisa ter 8 digitos numericos !")
    }

  } catch (err) {

    alert(err.message)
  }

}



export { validationCEP, fetchCep };

