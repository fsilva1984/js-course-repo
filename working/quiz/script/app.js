

const stateNames = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
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
  
];

const flagsOfBrazil = [
  './flags/acre.png',
  './flags/alagoas.png',
  './flags/amapa.png',
  './flags/amazonas.png',
  './flags/bahia.png',
  './flags/ceara.png',
  './flags/distrito-federal.png',
  './flags/espirito-santo.png',
  './flags/goias.png',
  './flags/maranhao.png',
  './flags/mato-grosso.png',
  './flags/mato-grosso-do-sul.png',
  './flags/minas-gerais.png',
  './flags/para.png',
  './flags/paraiba.png',
  './flags/parana.png',
  './flags/pernambuco.png',
  './flags/piaui.png',
  './flags/rio-de-janeiro.png',
  './flags/rio-grande-do-norte.png',
  './flags/rio-grande-do-sul.png',
  './flags/rondonia.png',
  './flags/roraima.png',
  './flags/santa-catarina.png',
  './flags/sao-paulo.png',
  './flags/sergipe.png',
  './flags/tocantins.png'
];

function indexRandom() {
  const rand = Math.floor(Math.random() * (26 - 0) + 0);
  return rand;
}

function randomImg(el, array) { 
  const rand = Math.floor(Math.random() * (26 - 0) + 0);
  el.setAttribute('src', array[rand]);
}

const img = document.querySelectorAll('img');
img.forEach(item => { 
  randomImg(item, flagsOfBrazil);
});

const n = indexRandom();

console.log(n, flagsOfBrazil[n], stateNames[n]);