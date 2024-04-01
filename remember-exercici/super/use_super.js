



class Fruits {
    construtor(classify, ...array) {
        this.classify = classify;
        this.array = array;
    }


    get() {
        const obj = {}
        obj[this.classify] = this.array
        return obj;
    }
}


class MyFruits extends Fruits {
    constructor(classify, fruitName, ...array) {
        //nao quero perder as propriedades da class pai
        super(classify, ...array);
        this.classify = classify;
        this.array = array;
        //dentro do meu construtor defino novas propriedades
        this.fruitName = fruitName;
    }
    getFruitName() {
        return this.fruitName
    }

}


const myFruits = new MyFruits(
    'Frutas',
    'Manga', 'Banana', 'Jaca', 'Laranja', 'Morango', 'Pesego'
);

console.log(myFruits.get());
console.log(myFruits.getFruitName());

























