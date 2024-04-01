
/*
    Desaconselhavel o uso de metodos dentro das
    funcoes construtoras, pois a cada nova instancia
    novo metodo sera recriado na memoria ocupando mais espaco.
*/

// declaracao de funcao costrutora 
function User(name, age, sex) {
    // propriedades
    this.name = name;
    this.age = age;
    this.sex = sex;

    // metodo
    this.adrres = function () {
        return {
            street: 'Rua major Mota',
            zip: 23338404,
            region: 'Rio de Janeiro',
            state: 'RJ'
        }
    }
    return {
        name: this.name,
        age: this.age,
        sex: this.sex,
        addr: this.adrres()
    }
}




const user1 = new User('Silva', 39, 'male');

console.log(user1);

console.log();

console.log(`${user1.name} ${user1.age} ${user1.sex}`);
