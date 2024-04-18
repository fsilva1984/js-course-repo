
/*
    Procuramos valores iguais nos dois objetos
*/

const obj1 = {
    array: [70, 20, 100, 42],
    childrens: {
        child1: 'Carlos',
        child2: 'Diego',
        child3: 'Fulano',
        child4: 'Marcos',
    }
}

const obj2 = {
    array: [30, 42, 25, 100],
    childrens: {
        child1: 'Salvador',
        child2: 'Marcos',
        child3: 'Gustavo',
        child4: 'Fulano',

    }
}

// Arrays vazios recebem os itens dos objetos iyerados
const arr1 = [];
const arr2 = [];

// Iteramos os dois objetos para extrair os itens
for (let key in obj1) {

 // itens do obj 1 sera posto no arr1 o mesmo vale para o bjs2
    for (let item in obj1[key]) {
        arr1.push(obj1[key][item]);
        arr2.push(obj2[key][item]);
    }
}

let n = 0;
for (let i in arr1) {
 // se itens do arr2 incluem no arr2
    if (arr2.includes(arr1[i])) {
        // pega os indices dos itens que deram match
        n = arr2.indexOf(arr1[i]);

        // mostra quais itens 
        console.log(arr2[n]);
    }
}

