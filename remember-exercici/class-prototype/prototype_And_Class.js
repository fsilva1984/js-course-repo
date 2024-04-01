
/*
    Em contrapartida das constructor functions
    temos as classes que seus metodos ja serao
    acoplados ao prototype
    por isso os metodos sao declarados dentro da class
*/


class User {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    primary_info() {
        return {
            name: this.name,
            age: this.age,
            sex: this.sex
        }
    }

    adrres(street, zip, region, state) {
        this.street = street;
        this.zip = zip;
        this.region = region;
        this.state = state;

        return {
            street: this.street,
            zip: this.zip,
            region: this.region,
            state: this.state,
        }
    }
}

const user1 = new User('Silva', 39, 'Male');

console.log(user1.primary_info());
console.log();


console.log(user1.adrres('Major Mota', 23030008, 'Rio de Janeiro', 'RJ'));
