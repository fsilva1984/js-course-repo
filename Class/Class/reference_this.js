




class User { 
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    point = 0;

    login() {
        return this;//retorna o proprio objeto
    }// AS INFORMACOES QUE O OBJETO POSUI

    logout() {
        return `usuario: ${this.name} saiu`;
    }

    addPoint() {
        this.point++;
        const p = (this.point > 1) ? 'pontos' : 'ponto';
        return `Usuario: ${this.name} posue (${this.point}) ${p} de login.`
    }
}


const user1 = new User('Flavio', 'fs@gmail');

const user2 = new User('Silva', 'silva@gmail.com');

console.log(user1.login());
console.log(user1.login().addPoint());
console.log(user1.login().addPoint());
console.log(user1.logout());












