
const form = document.querySelector('form');
const input = document.querySelector('#username');
const btn = document.querySelector('.button');
const pattern = /^[a-zA-Z]{6,}$/;

/*
  funcao recebe 5 parametros
  1- elemento a ser criado
  2- elemento referencia
  3- local onde ficara o elemento criado
  4- atributo para o elemento criado
  5- valor do atributo
*/
function insertElementPosition(el, elTarget, position, attribute, val) {
  const element = document.createElement(el);
  element.setAttribute(attribute, val);
  elTarget.insertAdjacentElement(position, element)
}

/*
  funcao recebe 3 parametros
  1- O elemento
  2- Nome da classe a ser adicionada, nota:(A classe ja deve esta criada no arquivo css)
  3- Nome da classe a ser removida
*/
function defineClass(el, addClass, removeClass) {
  el.classList.add(addClass);
  el.classList.remove(removeClass);
}

/*

 funcao adiciona textos ao elemento
 recebe 2 parametros
 1- elemento 
 2- o texto
*/
function addText(el, text) {
  el.textContent = text;
}




insertElementPosition('p', input, 'afterend', 'data-feedbackuser', 'feedback-user');
const firstP = document.querySelector('[data-feedbackuser="feedback-user"]');


input.addEventListener('input', e => {
  const valInput = e.target.value;
  const boolean = pattern.test(valInput);
 

  if (!boolean) {

    addText(firstP, 'O valor deve conter no mínimo 6 caracteres, apenas letras maiúsculas e/ou minúsculas');
    defineClass(firstP, 'username-help-feedback', 'username-success-feedback');

  } else {

    addText(firstP, 'Username válido =)');
    defineClass(firstP, 'username-success-feedback', 'username-help-feedback');
  }

});

/*

  Ao click do botao, verifica se o valor
  do imput esta correto e nao esta vazio
  dai entao o elemento 'p' e criado recebe 
  seus atributos e texto.

*/

btn.addEventListener('click', e  => {

  const boolean = pattern.test(input.value);


  if (!boolean) {
    e.preventDefault();

    insertElementPosition('p', btn, 'afterend', 'data-help', 'feedback-help');

    const pHelp = document.querySelector('[data-help="feedback-help"]');

    addText(pHelp, 'Por favor, insira um username válido');
    defineClass(pHelp, 'submit-help-feedback');
  }
  
});


/*
  verifica se  o elemento ja existe 
  no DOM, se positivo sera removido
*/
input.addEventListener('keyup', () => {
  
  const pHelp = document.querySelector('[data-help="feedback-help"]');
  if (pHelp != null) pHelp.remove();
  
});

