
const statesBR = [

  'Acre',

  'Alagoas',

  'Amapá',

  'Amazonas',

  'Bahia',

  'Ceará',

  'Espírito Santo',

  'Goiás',

  'Maranhão',

  'Mato Grosso',

  'Mato Grosso do Sul',

  'Minas Gerais',

  'Pará',

  'Paraíba',

  'Paraná',

  'Pernambuco',

  'Piauí',

  'Rio de Janeiro',

  'Rio Grande do Norte',

  'Rio Grande do Sul',

  'Rondônia',

  'Roraima',

  'Santa Catarina',

  'São Paulo',

  'Sergipe',

  'Tocantins',

  'Distrito Federal',

]

const ufBR = [

  'AC',

  'AL',

  'AP',

  'AM',

  'BA',

  'CE',

  'ES',

  'GO',

  'MA',

  'MT',

  'MS',

  'MG',

  'PA',

  'PB',

  'PR',

  'PE',

  'PI',

  'RJ',

  'RN',

  'RS',

  'RO',

  'RR',

  'SC',

  'SP',

  'SE',

  'TO',

  'DF',

]


//create element option and set in select
function setOptions(el) {

  let element = "";
  for (let i = 0; i < statesBR.length; i++) {

    element += `<option class="opt" value="${ufBR[i]}">${statesBR[i]}</option>\n`
  }

  el.innerHTML = `
  <option selected>State</option>
  ${element}`
}

//setting a value in field UF
function setUF(x, y) {

  y.addEventListener("click", () => {

    if (y.value !== "State") {

      const result = x.value = y.value
      console.log(result)
    }
  })
}

//validation field CEP
function validationCEP(el) {

  const pattern = /^[0-9]{8}$/gm;

  try {
    if (pattern.test(el.value)) {
      console.log('CEP OK');

    } else {
      throw new Error("O CEP precisa ter 8 digitos numericos !")
    }
  } catch (err) {

    alert(err.message)
  }

}



export { setOptions, setUF, validationCEP };

