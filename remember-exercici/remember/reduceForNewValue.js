

const array = [
    {
        id: 32,
        value: 652432
    },
    {
        id: 45,
        value: 652445
    },
    {
        id: 62,
        value: 652462
    },
    {
        id: 89,
        value: 652489
    }
];


/*
    Iremos reduzir o array de 4 objetos em
    apenas um objeto.

    invocamos o reduce para o array de objetos
    na iteração o acc sera um objeto vazio e
    sera inicialmente atribuido a ele o item.id
    que esta dentro dos cochetes em seguida ja
    recebe o item.value 

*/

// sera reduzido para apenas um objeto
const justAnObject = array.reduce((acc, item) => {
    acc[item.id] = item.value;
    return acc;
}, {});

console.log(justAnObject);


// sera reduzido para apenas um array
const justAnArray = array.reduce((acc, item) => {
    acc.push(item.id); acc.push(item.value);
    return acc;
}, []);

console.log(justAnArray);



// implemantando um reduce
Array.prototype.myReduce = function myReduce(callback, arg){
    let acc = arg;
    for (let i = 0; i < this.length; i++) {
        
      acc = callback(acc, this[i]);
    }
    return acc;
}

const reduceImplementado = array.myReduce((acc, {id, value}) => {
  // aqui o acc que é um objeto recebera o id como propriedade  
    acc[id] = value;// logo em seguida recebe o value 
    return acc;
}, {});

console.log(reduceImplementado);






