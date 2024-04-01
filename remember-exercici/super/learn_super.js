


/* 
    A class Car tem apenas uma propriedade e um metodo
    e recebe apenas um argumento em seu parametro
*/
class Car {
    constructor(name) {
        this.name = name
    }

    get() {
        return this.name;
    }
}

/*
    A class Bus herda tudo da class Car
    porem ele tem seu proprio contrutor,
    mas para nao perder o contrutor da
    sua class pai, dentro dela e invocada
    o construtor super que pertence a sua
    class pai, sendo assim a class Bus
    continua com as propriedades herada e
    constroe propriedades exclusivas suas.

*/
class Bus extends Car {
    constructor(name, model) {
        super(name)
        this.model = model
    }

    infoBus() {
        return `${this.name} ${this.model}`;
    }

}

const C = new Car('Corsa');
const B = new Bus('BRT', 'Trem');

console.log(C, B);

