
/*
    Difernça entre expressão e instrução.

    Uma expressão sempre retorna em um valor.
    Ja uma instrução gera um efeito colateral.

    exemplo:
        if(true) const a = 23;
    essa instrução nos mostra no console undefined.

    exemplo:
        1 + 3
    essa expressão retorna 4

*/


const obj = {
    name: 'Matheus',
    notas: [5.8, 9.5, 6.7],
    sum: function () {
        return this.notas
            .reduce((acc, item) => acc + item, 0);
    },
    currentStatus: function () {
        return (this.sum() > 15 ? 'Aprovado' : 'Reprovado');
    }
}

console.log(obj.sum(), obj.currentStatus());
















