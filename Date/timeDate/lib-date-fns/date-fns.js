const box = document.querySelector('[data-boxdate="date"]');
const year = document.querySelector('[data-year="year"]');
const month = document.querySelector('[data-month="month"]');
const weekDay = document.querySelector('[data-weekday="weekday"]');
const dayMonth = document.querySelector('[data-monthday="monthday"]');


const presentDay = new Date();

year.innerHTML = `${dateFns.format(presentDay, 'YYYY') }`;
month.innerHTML = `${dateFns.format(presentDay, 'MMMM') }`;
dayMonth.innerHTML = `${dateFns.format(presentDay, 'DD') }`;
weekDay.innerHTML = `${dateFns.format(presentDay, 'dddd') }`;
