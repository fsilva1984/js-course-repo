



class User {

    //metodo construtor
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    dataUser() {// retorna um json
        const user = {
            name: this.name,
            age: this.age,
            email: this.email
        }
        return JSON.stringify(user);
    }

}


const user1 = new User('Flavio', 40, 'fs@gmail.com');

console.log(user1);

console.log();

console.log(user1.dataUser());



