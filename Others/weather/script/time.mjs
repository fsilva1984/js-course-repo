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
const dayWeek = date.getDay();
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

export default function getDate() {
  return {
    hours: zero(hours),
    minutes: zero(minutes),
    seconds: callSeconds,
    year: year,
    dayMonth: zero(dayMonth),
    month: () => monthName[month]
  }
}
