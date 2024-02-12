
const logradouro = document.querySelector('#logradouro');
const bairro = document.querySelector('#bairro');
const localidade = document.querySelector('#localidade');
const uf = document.querySelector('#uf');
const num = document.querySelector('#numero');
const boxErro = document.querySelector('.boxErro');
const input = document.querySelector('input');
const btn = document.querySelector('button');





const getAddres = async url => {

    try {
        return (await fetch(url)).json();

    } catch (error) {

        if (error.message === 'Failed to fetch') {
            boxErro.textContent = 'Desculpe CEP nao encontrado';
        }
    }
}




btn.addEventListener('click', evnt => {
    evnt.preventDefault();

    getAddres(`https://viacep.com.br/ws/${input.value}/json/`)
        .then(data => {
            logradouro.textContent = data.logradouro;
            bairro.textContent = data.bairro;
            localidade.textContent = data.localidade;
            uf.textContent = data.uf;
        })

});





