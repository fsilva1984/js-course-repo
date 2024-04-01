


/*
    Encadiamento de funcões usando o piepe
*/

/*
    A função ecebe um valor inicial por
    parametro, e retorna o resultado do
    processo:
    A função 3 menos o resultado da função 2
    que processou o valor retornado da função 1
*/
function allInOne(p) {
    let n = p;

    const metodo1 = param => param * 3;
    const metodo2 = param => param / 2;
    const metodo3 = param => param + 8;

    return (metodo3(n) + metodo2(metodo1(n))) - n;
}
console.log(allInOne(15));




/*
    Essa função faz o mesmo que a função a cima,
    mas recebe um valor inicial e um array de funções.

    O valor inicial passado para o parametro da
    função principal, servirar como valor inicial da
    operação do reduce, que por sua vez recebe dois
    parametro um parametro acumulador, e o outro recebe
    os valores de cada indice do array 
*/
const metodo1 = param => param * 3;
const metodo2 = param => param / 2;
const metodo3 = param => param + 8;

const combineFubnc = (start, array) =>
    array.reduce((acc, func) => func(acc), start);

console.log(
    combineFubnc(15, [metodo1, metodo2, metodo3] )
);