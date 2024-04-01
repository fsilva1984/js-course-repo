

/*
    O this sempre ira referenciar o escopo onde 
    ele esta sendo chamado
*/


function Call_this(a, b) {
    this.a = a;
    this.b = b;
    //console.log(this.a, this.b);
    return this
}

console.log(Call_this('Flavio', 'Silva'));


const Call_this2 = (a, b) => {
    this.a = a;
    this.b = b;
    return this //`${this.a} ${this.b}`;
}

console.log(Call_this2('Silva', 'Flavio'));


