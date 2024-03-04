const dateElenent = document.querySelector('.date');
const hourElement = document.querySelector('.hour');

const monthName = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]

const zero = (n) => (n < 10) ? '0' + n : n;

const date = new Date();

//date
const dayMonth = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

//hour
const hours = date.getHours();
const minutes = date.getMinutes();

function callSeconds() {
  const seconds = new Date().getSeconds();
  return zero(seconds);
};

const setMonth = () => monthName[month];


dateElenent.textContent = `${zero(dayMonth)} ${setMonth()} ${year}`
setInterval(() => {
  hourElement.textContent = `${zero(hours)}:${zero(minutes)}:${callSeconds()}`
}, 1000)

