

class Fetcher {
    constructor(cep) {
        this.cep = cep;
    }

    async fetchData() {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${this.cep}/json/`);
            if (!response.ok) {
                throw new Error('Erro ao buscar os dados.');
            }
            return (await response.json());
        } catch (error) {
            console.error('Erro:', error.message);
        }
    }
}

const input = document.querySelector('input');
const logradouro = document.querySelector('.logradouro');
const bairro = document.querySelector('.bairro');
const localidade = document.querySelector('.localidade');
const uf = document.querySelector('.uf');
const btn = document.querySelector('.btn');


btn.addEventListener('click', (e) => {
    e.preventDefault();

    const fetcher = new Fetcher(input.value);

    fetcher.fetchData()
        .then(data => {

            // jogar no html
            logradouro.textContent = data.logradouro;
            bairro.textContent = data.bairro;
            localidade.textContent = data.localidade
            uf.textContent = data.uf;
        })
        .catch(error => {
            console.error('Erro ao obter os dados:', error);
        });
})