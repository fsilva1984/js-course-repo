



//viacep.com.br/ws/01001000/json/ 


class Cep {
    constructor(cep) {
        this.cep = cep;
    }

    async query() {

        try {

            const response = await fetch(`https://viacep.com.br/ws/${this.cep}/json/`)
            const data = await response.json()

            if (!data.erro) {
                return data
            }

            throw new Error('CEP invalido')

        } catch (error) {

            return error

        }

    }

    async showData() {
        return await this.query()
            .then(data => console.log(data));
    }
}

const cep = new Cep(23030008);

console.log(cep.showData());

