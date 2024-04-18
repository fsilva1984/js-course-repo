function soma(umNumero) {
    return (outroNumero) => umNumero + outroNumero;
}

let somaDois = soma(2) // i.e., somaDois é a função (outroNumero) => 2 + outroNumero
let somaTres = soma(3) // i.e., somaTres é a função (outroNumero) => 3 + outroNumero

let resultado1 = somaDois(3)
let resultado2 = somaTres(4)

console.log(soma(2)(3), resultado1, resultado2)
