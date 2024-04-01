
/*
    metodos staticos

*/


class OrtaFruits {
    constructor(classify, ...array) {
        this.classify = classify;
        this.array = array;
    }
    
    obj = {};

    storage() {
        return this.obj;
    }
}

// Agregando um metodo a class OrtaFruits
OrtaFruits.prototype.stock = function stock(group, ...arr) {
    this.classify = group;
    this.array = arr;

    this.obj[this.classify] = this.array;
}


const kitanda = new OrtaFruits();


kitanda.stock('fruta', 'Abacate', 'Manga', 'Pesego', 'Laranja');
kitanda.stock('vegetal', 'Chuchu', 'Abobora', 'Cenoura');
kitanda.stock('Graos', 'Grão de pico', 'Feijão verde', 'Lentilha');

console.log(kitanda.storage());