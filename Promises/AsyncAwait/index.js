

const bt = document.querySelector("#btn")
const showData = document.querySelector(".adress")

// print adress
function showAdress(params) {

  showData.innerHTML = `
  <h3 class="showDate">${params.logradouro}</h3>
  <h3 class="showDate">${params.bairro}</h3>
  <h3 class="showDate">${params.localidade}</h3>
  <h3 class="showDate">${params.uf}</h3>
  <h3 class="showDate">${params.cep}</h3>
  `
}


// fetch API
async function searcheCEP(cep) {
  
  const url = `https://viacep.com.br/ws/${cep}/json/`
  
  try {

    
    const response = await fetch(url)
    const data = await response.json()

    if (! data.erro) {

      showAdress(data)
    } else {

      throw new Error('CEP invalido')
    }
    
  } catch (error) {
    
    showData.innerHTML = `
    <h3 id="err" class="showDate">${error.message}</h3>
    `
    const err = document.querySelector("#err")
    err.style.color = 'red'

  }

}

// validation
function isValidCEP(param) {

  const pattern = /^[0-9]{8}$/

  try {
    if (pattern.test(param)) {

      searcheCEP(param)
    } else {

      throw new Error("O CEP deve ter 8 digitos numericos")
    }
  } catch (error) {

    alert(error.message)
  }

}

bt.addEventListener('click', () => {

  const input = document.querySelector("#c-1")
  isValidCEP(input.value)
})









