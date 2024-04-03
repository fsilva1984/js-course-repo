// Impotar a função que cria elementos
import fnCreateElement from './createElement.mjs';

/*
 o body vai receber o primeior elemento criado
 pela função fnCreateElement.
*/
const body = document.querySelector('body');
const main = fnCreateElement('div', { id: 'main' });
const form = fnCreateElement('form', { id: 'form' });
const subDiv = fnCreateElement('div', { id: 'subDiv' });


// Colocamos o form dentro da div main ea div main no body
main.appendChild(form);
body.appendChild(main);
main.insertAdjacentElement('beforeend', subDiv);


// Criaremos um botao e um input com seus atributos
const button = fnCreateElement('button', { type: 'submit', id: 'btn' });
const input = fnCreateElement('input', {
    value: "",
    id: 'entrie',
    type: 'text',
    placeholder: 'Ex: Cep 00000000'
});

// O botao recebera um texto eo for recebera o input eo botao 
button.innerText = 'Search';
form.appendChild(input);
form.insertAdjacentElement('beforeend', button);


// faremos um fetch na url em busca do endereco
async function fetchCity(cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    try {
        // se bem sucedido teremos um arquivo json com as info
        if (response.ok) {
            return response.json();
        }
        throw new Error('Cidade não foi encontrada');
    } catch (error) {
        console.log(error.message);
        return error.message;
    }
}


// Elementos li, serao criadas e postas dentro da ul
const ul = fnCreateElement('ul', { id: 'ul' });
const li1 = fnCreateElement('li', { id: 'logradouro', class: 'item' });
const li2 = fnCreateElement('li', { id: 'bairro', class: 'item' });
const li3 = fnCreateElement('li', { id: 'localidade', class: 'item' });
const li4 = fnCreateElement('li', { id: 'uf', class: 'item' });

// inserindo as li's dentro da ul 
[li1, li2, li3, li4].forEach(item => ul.appendChild(item));
// ul sendo inserida dentro da sub div 
subDiv.appendChild(ul);

/*
    EventListener aguardando o click para chamar a funcao
    fetchCity
*/ 
button.addEventListener('click', e => {
    e.preventDefault();

    if (input.value !== "") return;

    fetchCity()
        .then(data => {
            const { logradouro, bairro, localidade, uf } = data;
        
            li1.innerText = logradouro;
            li2.innerText = bairro;
            li3.innerText = localidade;
            li4.innerText = uf;

        }).catch(error => console.log(error))
});





