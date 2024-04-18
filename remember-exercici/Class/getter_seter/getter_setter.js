


class Calc {
    #n1
    #n2
    constructor() {
        this.#n1 = 0;
        this.#n2 = 0;
    }

    get sum() {
        return this.#n1
            + this.#n2;
    }

    get sub() {
        return this.#n1
            - this.#n2;
    }

    get div() {
        return this.#n1
            / this.#n2;
    }

    get mult() {
        return this.#n1
            * this.#n2;
    }

    get pow() {
        return Math.pow(this.#n1, this.#n2);
    }

    get sqrt() {
        return Math.sqrt(this.#n1);
    }

    set(n1, n2) {
        this.#n1 = n1;
        this.#n2 = n2;
    }
}


const n = new Calc();

n.set(25);

console.log(n.sqrt);

