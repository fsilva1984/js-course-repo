
/********* IMPORTANTE ***********

    O spread operator faz uma copia rasa,
    isso significa que objetos aninhados serão
    referenciados, exmplo:
    obj = {
        prop: { id: 45}
    }
    e faço uma copia usando o spread copyObj = { ...obj }
    O obj e o copyObj partilharão o mesmo objeto prop: { id: 45 }

*/


const obj = {
    name: 'Silva',
    age: 34,
    phoneNumbr: '+55-21-34227098',
    addres: {
        cyte: 'Sao Paulo',
        state: 'Sao Paulo',
        street: 'Rua Candida',
        number: 10,
        zipCode: '23030-300',
        coutry: 'Brazil'
    },
    experiecens: [
        2,
        { employment: 'Programing jr' },
        { employment: 'Programing jr. Java' }
    ],
    returnJson() {
        return (JSON.stringify(this, null, 2));
    }
}

/*
   Para resolver o problema da cópia rasa com o spread,
   podemos sobrescrever o valor da propriedade e fazer
   uma cópia dos objetos armazenados no objeto original.
   
   Além disso, é importante lembrar que os métodos de
   objetos são funções e, no caso do JavaScript, funções
   também são objetos. Portanto, se necessário, podemos
   também sobrescrever as funções dentro do novo objeto
   copiado. No entanto, se isso não causar problemas na
   aplicação, é recomendável manter a referência à função
   original, pois isso proporciona economia de memória e
   processamento.
*/
const copyObj = {
    ...obj,
    addres: {// sub-escreve a propriedade
        ...obj.addres
    },
    experiecens: [// com os arrays a historia e parecida
        obj.experiecens[0],
        ...obj.experiecens
    ]
}
/*
    se os valores do array são objetos, esses
    objetos devem ser copiados, para não serem
    referenciados que e o comportamento padrão
    do javascript.

*/ 