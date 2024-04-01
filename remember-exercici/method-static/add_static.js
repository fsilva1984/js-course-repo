
// iniciamos com uma class
class User {
    constructor(name, age, gender, { tel, email }) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.info = { tel, email };
    }

    data() {
        return {
            name: this.name,
            age: this.age,
            gender: this.gender,
            info: this.info
        }
    }
}

// Da class User extraimos uma instancia
const user1 = new User('Rogerio', 34, 'Male', { tel: 97384659, email: 'roger@gmial.com' });

console.log(user1.data());




class Studant extends User { }

// Metodo statico
Studant.prototype.toJson = function toJson() {
    return JSON.stringify(this.data());
}

const user2 = new Studant('Miguel', 34, 'Male', { tel: 97384659, email: 'miguel@gmial.com' });

console.log(user2.toJson());





