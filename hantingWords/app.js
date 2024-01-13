
const input = document.querySelector('#browser');
const btn = document.querySelector('#btn');


btn.addEventListener('click', e => {
  e.preventDefault();
  console.log(input.value);
  input.value = '';
});