
const main = document.querySelector('#main');

main.style.display = 'flex';
main.style.justifyContent = 'center';



const title = document.querySelector('#title');
title.style.width = '100%';
title.innerHTML = `Random`;


const tbody = document.querySelector('tbody');
const childTbody = tbody.querySelectorAll('tr');

childTbody.forEach((item) => {
  Array.from(item.children).forEach(i => {
    i.style.width = '40px', i.style.height = '40px'
  })
});



const num = document.querySelectorAll('.num');

const rand = () => Math.floor(Math.random() * (100 - 1) + 1);
num.forEach((el, idx) => {num[idx].textContent = rand()});



const abc = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
  'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
  'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]
const latter = document.querySelectorAll('.lat');
const idx = () => Math.floor(Math.random() * (25 - 0) + 0)

latter.forEach(val => val.textContent = abc[idx()]);



const sym = document.querySelectorAll('.sym');
const symbol = ['@', '#', '%', '&', '*', '(', ')', '<', '>', '\\', '/'];

const i = () => Math.floor(Math.random() * (10 - 0) + 0);
sym.forEach(el => el.textContent = symbol[i()]);

