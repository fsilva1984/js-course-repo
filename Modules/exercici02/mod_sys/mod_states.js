
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

const uf = [

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


function states(element) {

  let el = '';

  for (let i = 0; i < uf.length; i++) {

    el += `<option>${statesBR[i]}</option>`
  }

  element.innerHTML = `
  <option selected="">Estado</option>\n
  ${el}`

}



function ufBR(y, x){

}



export { states }








