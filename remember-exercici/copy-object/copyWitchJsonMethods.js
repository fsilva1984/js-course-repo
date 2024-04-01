const obj = {
    name: 'Silva',
    age: 34,
    phoneNumbr: '+55-21-34227098',
    adrres: {
        cyte: 'Sao Paulo',
        state: 'Sao Paulo',
        street: 'Rua Candida',
        number: 10,
        zipCode: '23030-300',
        coutry: 'Brazil'
    },
    returnJson() {
        return (JSON.stringify(this, null, 2));
    }
}

/*
    Para deixar a string json mais legivel o stringify
    aceita dois argumentos, primeiro e como vaise apresentado
    a string o segundo sao a quantidade de spacos em branco ela tera
*/
const copy = JSON.stringify(obj, null, 2);
const copyObj = JSON.parse(copy);
console.log(obj.returnJson());


/*
    Vale resaltar que esse metodo de copya de obj
    sera ineficaz se o objeto contem metodos
    esses metodos nao serao copiados sendo totalmente
    ignorados no momento do tranformacao em string json
*/


console.log(copy);
console.log(copyObj);