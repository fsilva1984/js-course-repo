
/*
  Aqui o elemento filho e
  o elemento pai tem em evento 
  de click, mas clicando apenas no filho
  tambem sera disparado o  evento do elemento pai
  pos entra em acao o envento de propagacao 
  um metodo existente no DOM
  para evitar isso podemos usar o 
  stopPropagation()

*/


const ul = document.querySelector('.product');
const li = document.querySelectorAll('.products');

document.querySelector('body').style.backgroundColor = '#cece8f';

li.forEach(item => {
  item.addEventListener('click', e => {
    let element = e.target;
    element.style.color = '#797EF6';
  });
});
ul.addEventListener('click', () => {
  const array = ['Carrinho', 'Boneco batman', 'Bicicleta'];
  let element = '';
  for (let i = 0; i < array.length; i++) {
    element += `<li style='color: red;'>${array[i]}</li>`
  }

  ul.innerHTML = element;


  setTimeout(() => { 
    alert('O Evento foi Propagado!!');

  }, 1000);
});