
// declaração de class com uma propriedade e um metodo 
class User {
    constructor(name) {
        this.name = name;
    }

    nRegistry() {
        return `Registro do Usuario ${this.name} 3456354667`
    }
}

// metodo statico adicionado a class User 
User.prototype.registered = function registered() {
    return `Usuario ${this.name} data da matricula 15/12/2021`
}

const user1 = new User();

console.log(user1.__proto__);
console.log(user1);


// class Estudant herda tudo da class User mas tambem tem seu metodo proprio.
class Estudant extends User {
    pontuation() {// exclusivo de Estudant
        return `Usuario: ${this.name} tem 38 pontos`;
    }
}

const aluno = new Estudant();

console.log(aluno.__proto__);



//class Teacher herda tudo da class User e da class Estudant
class Teacher extends Estudant { }

const teacher = new Teacher("Amadeu");


console.log(teacher);
console.log(teacher.nRegistry());
console.log(teacher.registered());
console.log(teacher.pontuation());


