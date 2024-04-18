


const user = 'flavio francisco da silva';

// divido pelos esapcos ja formando um array com o slice
let str = user.split(" ");

let newStr = "";

/*
    Itero o array pegando a letra inicial dos
    itens do array tranformando-os em caixa alta
    concatenando com o que sobar do recorte do slice
    que tambem sera concatenando com um espaço e 
    adicionado tudo a variavel newString
*/ 
str.forEach(chunk => {

    newStr += chunk[0].toLocaleUpperCase() + chunk.slice(1) + " "
});

console.log(newStr);