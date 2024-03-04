
/*
    ! IMPORTANTE **

 em uma classe filha onde e nessessario
 declarar um construtor e o brigatorio
 declarar dentro do construtor uma
 super(),
 pois essa se refere ao construtor da sua classe pai


 exemplo:

    class Fruts {
        constructor(){}
    }

    class Citrus extends Fruts {
        constructor(){
            super()
        }
    };


    deixando claro se for realmente preciso a declaracao
    de um contrutor na classe erdeira,
    caso contrario a classe erdeira recebe o construtor da classe pai
*/





class Fruts {
    constructor(...array) {
        this.array = array;
    }

    addFrut(param) {
        this.array.push(param);
    }

    stock() {
        var f = '';
        for (let i in this.array) {
            f += this.array[i] + " ";
        }
        return f;
    }
}



const redFruts = new Fruts('Morango', 'Cereja', 'Amora', 'Framboesa', 'Mirtilo');


console.log(redFruts.stock());
redFruts.addFrut('Manga')
console.log(redFruts.stock());


/*
    a class Citrus erda as propriedades e metodos
    da sua class pai Fruts 
*/
class Citrus extends Fruts { };

const lime = new Citrus('Lima', 'Limão', 'Pomelo', 'Tangerina');

console.log(lime.stock());


/*
    a class Vegetables alem de
    erda as propriedades e metodos
    da sua class pai Fruts
    tambem tera seus proprios metodos
*/
class Vegetables extends Fruts {

    arr = [];

    addPropert(propert) {
        this.arr.push(propert)
    }

    properties() {
        var p = '';
        for (let i in this.arr) {
            p += this.arr[i] + " ";
        }
        return p;
    }
}

const vegetGreen =
    new Vegetables('abóbora', 'abobrinha', 'berinjela', 'beterraba');


console.log(vegetGreen.stock());

vegetGreen.addPropert(
    'Abobora faz bobo', 'Abobrinha com carne seca', 'Berinjela  a milaneza'
);

console.log(vegetGreen.properties());