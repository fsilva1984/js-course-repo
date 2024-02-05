
const input = document.querySelector('#input-add');
const ul = document.querySelector('#ul');

// Add a template with new tasks 
const addItem = () => {
  ul.innerHTML += `
    <div class="box" data-box="list">
    <li class="li" data-li="list">${input.value.trim()}</li>
    <div class="del" data-trash="list">
      X
    </div>
    </div>
    `
  input.value = '';
}
input.addEventListener('keyup', e => {
  if (e.key === 'Enter') {
    addItem();
  }
});


// Marca para deltar
ul.addEventListener('click', e => {

  if (e.target.dataset.trash) {
    e.target.parentElement.classList.toggle('selected');
  }
})
// Deleta
ul.addEventListener('dblclick', e => {
  if (e.target.dataset.trash) {
    e.target.parentElement.remove();
  }
})


// Search task 
const browser = document.querySelector('#browser');
browser.addEventListener('keyup', e => {
  let regex = new RegExp(e.target.value, 'i');


  document.querySelectorAll('li')
    .forEach(el => {

      if (!regex.test(el.textContent))
        el.parentElement.style.display = 'none';

    });
})
document.addEventListener('click', () => {
  document.querySelectorAll('.box')
    .forEach(el => {
      el.style.display = 'flex';
    });
  browser.value = '';
});














