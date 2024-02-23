const input = document.querySelector('#input');

// tras de volta todo que esta na LocalStorage
document.addEventListener("DOMContentLoaded", () => {

    for (let i = 0; i < localStorage.length; i++) {
        const template = `
        <div class="box">
        <li>${localStorage.getItem(i)}</li>
        <div class="trash">X</div>
        </div>
        `
        addTask(template);
    }
});

// add o valor do input a LocalStorage
let n = 0;
const count = () => n++;
function setStorage(value) {
    localStorage.setItem(count(), value);
}

// a tarefa e adicionada a pagina
function addTask(template) {
    document.querySelector('#ul')
        .insertAdjacentHTML('afterbegin', template);
    input.value = null;
}

/*
    Ao pressionar Enter as funcoes serao chamadas,
    adicionando a tarefa a pagina e a LocalStorage
*/
input.addEventListener('keydown', e => {

    if (e.key == 'Enter' && !input.value == '') {
        const template = `
        <div class="box">
        <li class="task">${input.value}</li>
        <div class="trash">X</div>
        </div>
        `
        setStorage(input.value);
        addTask(template);
    }
});

// marcar a tarefa com borda vermelha
document.addEventListener('click', e => {
    const element = e.target;
    if (element.nodeName == 'LI') {
        element.parentElement.classList.toggle('borderRed');
    }
});


// remove tarefa da tela e da localStorage
function deletValueStorageAndScreen(el) {
    const { textContent } = el.previousElementSibling;
    el.parentElement.remove();

    for (let i = 0; i < localStorage.length; i++) {
        if (textContent == localStorage.getItem(localStorage.key(i))) {
            localStorage.removeItem(localStorage.key(i));
        }
    }
}

// chama a funcao, remove valor da tele e da storage 
document.addEventListener('click', e => {
    const element = e.target;

    if (element.className == "trash") {
        deletValueStorageAndScreen(element)
    }
});
