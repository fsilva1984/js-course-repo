

const date = new Date();

// Time
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

// Date
const dayWeek = date.getDay();
const dayMonth = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();


// set a month
const setMonth = n => { 
   return [
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
    ][n];
}
// set week day
const setWeek = n => {
    return [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'sexta',
        'Sabado'
    ][n];
}

// function add 0
const zero = n => n < 10 ? '0' + n : n;


const dateFull = `${year} ${setMonth(month)} ${zero(dayMonth)} ${setWeek(dayWeek)}`;
console.log(dateFull);

const timeFull = `${zero(hours)}:${zero(minutes)}:${zero(seconds)}`;
console.log(timeFull);



const timestamp = 1252837194728;

const convertDate = new Date(timestamp);

console.log(convertDate);