
/*
  insertAdjacentElement(position, element)

    valor             descricao
    afterbegin    torna se o primeiro filho do elemento alvo
    afterend      depois do elemento alvo
    beforebegin   antes do elemento alvo
    beforeend     torna se o ultimo filho do elemento alvo

*/



const main = document.querySelector('#main');


function createEl(el, toElement, position, attribut, value) {
  const element = document.createElement(el);
  toElement.insertAdjacentElement(position, element);
  element.setAttribute(attribut, value);
}

function addText(el, text) {
  el.textContent(text);
}



createEl('div', main, 'afterbegin', 'class', 'container');















