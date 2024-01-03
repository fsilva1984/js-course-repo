

const body = document.querySelector('body');

const main = document.createElement('main');

const ul = document.createElement('ul');

//body.style.backgroundColor = '#DDD9CD';
main.appendChild(ul);
body.appendChild(main);

const getUl = document.querySelector('ul');

const numbers = [34, 56, 89, 67, 34, 12, 42, 51];


function createLi(array, element) {
  let templateHTML = '';
  array.forEach(el => {
    templateHTML += `<li>${el}</li>`
  });

  this.element = element;
  element.innerHTML = templateHTML;
}

createLi(numbers, getUl);

const colors = ['blue', 'orange', 'black', 'deeppink', 'red', 'green', 'purple', 'yellow']

const lis = document.querySelectorAll('li');

lis.forEach((el, idx) => {
  el.style.color = colors[idx];
});






