
/*
    Uma boa saida para evitar a replicacao
    dos metodos de forma desnecessaria

    seria declarar os metodos direto no prototype
    da funcao
*/

// declaracao de funcao costrutora 
function User(name, age, sex) {
    // propriedades
    this.name = name;
    this.age = age;
    this.sex = sex;
}

// metodo primaryInfo definido no prototype da funcao
User.prototype.primaryInfo = function () {
    return {
        name: this.name,
        age: this.age,
        sex: this.sex,
    }
}

// metodo adrres definido no prototype da funcao
User.prototype.adrres = function (street, zip, region, state) {
    this.street = street;
    this.zip = zip;
    this.region = region;
    this.state = state;

    return {
        street: this.street,
        zip: this.zip,
        region: this.region,
        state: this.state
    }
}



const user1 = new User('Silva', 39, 'male');

console.log(user1);
console.log();

console.log(`${user1.name} ${user1.age} ${user1.sex}`);
console.log();


console.log(user1.primaryInfo());
console.log();

console.log(user1.adrres('Rua major Mota', 23338404, 'Rio de Janeiro', 'RJ'));
console.log();