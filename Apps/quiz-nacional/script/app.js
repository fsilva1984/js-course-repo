
// OS ARRAYS
const arrayStateNames = [
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

function rand() {
  return Math.floor(Math.random() * (26 - 0) + 0);
}

// FUNCOES GLOBAIS
/* 
define um atributo 'src' e o caminho 
do arquivo de imagem no elemento img*/
function randomImg() {

  const box = document.querySelectorAll('.bx');
  box.forEach(({ firstElementChild }) => {
    firstElementChild.setAttribute('src', flagsOfBrazil[rand()])
  });
}
randomImg();

// define um texto aleatorio em todos os elemento label
function randomLabels() {
  document.querySelectorAll('label')
    .forEach(el => {
      el.textContent = arrayStateNames[rand()];
    });

}
randomLabels();//label

// bandeira que esta sendo exibida
function getFlagTheDisplay(index) {

  const box = document.querySelectorAll('.bx');
  const flag = box[index].firstElementChild.getAttribute('src');
  const i = flagsOfBrazil.indexOf(flag);
  const nameFlag = arrayStateNames[i];
  return nameFlag;
}

function rand2() {
  return Math.floor(Math.random() * (2 - 0) + 0);
}

// combina o nome da bandeira exibida com uma das labels
function flagMatchLabel() {
  const labels = document.querySelectorAll('label');
  [// array de indices das labes em pares
    [labels[0], labels[1]],
    [labels[2], labels[3]],
    [labels[4], labels[5]],
    [labels[6], labels[7]],
    [labels[8], labels[9]]
  ].forEach((item, index) => {

    item[rand2()].textContent = getFlagTheDisplay(index)
  });

}
flagMatchLabel();

// Se o input marcado tem a lebel referente a bandeira 
function inputChecked(indexInput1, indexInput2, indexBox) {

  const input = document.querySelectorAll('input');
  const valueFirstLabel = input[indexInput1].nextElementSibling.innerHTML;
  const valueSecondLabel = input[indexInput2].nextElementSibling.innerHTML;
  const flagOnDisplay = getFlagTheDisplay(indexBox);

  if (input[indexInput1].checked) {
    return flagOnDisplay == valueFirstLabel;

  } else if (input[indexInput2].checked) {
    return flagOnDisplay == valueSecondLabel;
  }

}


function box01() {
  return inputChecked(0, 1, 0);//comparar nome da bandeira ao input marcado
}

function box02() {
  return inputChecked(2, 3, 1);
}

function box03() {
  return inputChecked(4, 5, 2);
}

function box04() {
  return inputChecked(6, 7, 3);
}

function box05() {
  return inputChecked(8, 9, 4);
}

const btn = document.querySelector('.bt');
btn.addEventListener('click', e => {
  e.preventDefault();

  const percent = document.querySelector('.percent');
  const score = document.querySelector('.score');
  let n = 0;

  [
    box01(),
    box02(),
    box03(),
    box04(),
    box05()
  ].forEach((fn, i) => {

    if (fn) {
      n += 20;
    }

  });

  if (n < 50) {
    percent.classList.remove('text-primary');
    percent.classList.add('text-danger');
  } else {
    percent.classList.remove('text-danger');
    percent.classList.add('text-primary');
  }


  window.scrollTo(0, 0);
  document.querySelector('.resp').style.display = 'flex';

  function animeScore(param) {

    let num = 0;
    const id = setInterval(() => {

      if (num == param) {
        clearInterval(id);
      }
      score.textContent = num;
      num += 20
    }, 500);
  }
  animeScore(n);



  setTimeout(() => {

    document.querySelectorAll('input')
      .forEach(el => {
        el.checked = false;
      });

    location.reload();
  }, 6000);

});