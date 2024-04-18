
class Counter {
    constructor(num) {
        this.num = num;
    }

    get_value() {
        console.log(this.num);
    }

    increment() {
        return this.num++;
    }
}



const count = new Counter(5);

count.get_value();
count.increment();
count.get_value();


class Power extends Counter {
    constructor(num, n) {
        super(num);

        this.n = n;
    }

    potencia(){
        console.log(this.num ** this.n);
    }
}

const powerline = new Power(4, 10);

powerline.get_value()
powerline.increment()
powerline.potencia()