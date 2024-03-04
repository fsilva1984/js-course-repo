

class Cep {
    constructor(cep) {
        this.cep = cep;
    }
    ul = document.querySelector('ul');
    async query() {

        const response = await fetch(`https://viacep.com.br/ws/${this.cep}/json/`);
        const data = await response.json();
        const { bairro, localidade, logradouro, uf, ddd } = data;
        const array = [logradouro, bairro, localidade, uf, ddd];

        let template = '';
        array.forEach(item => {
            template += `<li>${item}</li>`
        });

        this.ul.insertAdjacentHTML('beforeend', template)

    }

}


const cep = new Cep(23030000);

cep.query()






/*
       
       bairro: "Guaratiba"

       cep: "23030-008"
       ​
       complemento: ""
       ​
       ddd: "21"
       ​
       gia: ""
       ​
       ibge: "3304557"
       ​
       localidade: "Rio de Janeiro"
       ​
       logradouro: "Rua Major Mota"
       ​
       siafi: "6001"
       ​
       uf: "RJ"
       
*/