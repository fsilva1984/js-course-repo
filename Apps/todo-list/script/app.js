


// input add tarefas na to-do
const addtask = document.querySelector('#write-task');

// recebe template html
const container = document.querySelector('.container');
const box = document.querySelector('.body-main');

function addTask() {
  container.innerHTML += `

   <div class="box-task">
     <p class="task">${addtask.value}</p>
   </div>
   <div class="trash">
      <i class="del fa-solid fa-trash"></i>
   </div>
  `;
}

addtask.addEventListener('keypress', e => {

  if (e.key === 'Enter' && !addtask.value == '') {

    box.style.display = 'flex';

    addTask();

    addtask.value = '';
  }

});


document.addEventListener('click', e => {

  if (e.target.tagName == 'I') {

    let clickedElement = e.target;
    let parentElementClicked = clickedElement.parentElement;
    let elementTaskBox = parentElementClicked.previousElementSibling;

    elementTaskBox.classList.toggle('borderRed')//


    e.target.addEventListener('dblclick', e => {

      elementTaskBox.remove();
      parentElementClicked.remove();

    })

  }

})


const browser = document.querySelector('#browser');
browser.addEventListener('keyup', e => {

  const task = document.querySelectorAll('.task');

  function hiddenElement(el) {

    // PAI E TIO DO ELEMENTO PROCURADO
    const parent = el.parentElement;
    const uncle = parent.nextElementSibling;

    parent.style.display = 'none';
    uncle.style.display = 'none';

  }


  // PADRAO DE BUSCA
  const val = browser.value.toLowerCase();
  const pattern = new RegExp(val, 'igm');


  const arrParent = [];
  const arrUncle = [];

  // PROCURA ELEMENTO E REMOVE O QUE NAO E
  task.forEach(item => {

    const match = pattern.test(item.textContent.toLowerCase());
    arrParent.push(item.parentElement);
    arrUncle.push(item.parentElement.nextElementSibling);


    if (!match) {
      hiddenElement(item);
    }

  })



  // CLEAN INPUT & SET DISPLAY IN ELEMENTS
  document.addEventListener('click', e => {
    if (e.target.tagName != 'INPUT') {

      browser.value = '';

      arrParent.forEach(item => item.style.display = 'flex');

      arrUncle.forEach(item => item.style.display = 'flex');
    }

  });
});









