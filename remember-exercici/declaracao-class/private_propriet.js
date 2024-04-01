

// Propriedades privadas
class User {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    // O rashtag torna a propriedade ou metodo privado da class
    #dataJson() {
        return {
            name: this.name,
            age: this.age,
            gender: this.gender,
            file: () => JSON.stringify(this.#dataJson()) 
        }
    }


    fileJson() {
        return this.#dataJson().file()
    }
}





const user = new User('Roger', 34, 'Male');

console.log(user.fileJson());










