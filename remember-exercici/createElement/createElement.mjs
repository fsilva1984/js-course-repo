
/*
    A função cria um elemento recebendo por
    parametro o nome do elemento a ser criado
    e um objeto de atributos
*/
const fnCreateElement = (elementName, attributes) => {
    // cria o elemento
    const element = document.createElement(elementName);
    /*
        O Object.entries tranforma as chaves e valores em
        array ou ceja xada chave e valor sera u array
    */
    const attributeAsArray = Object.entries(attributes);
    /*
        Aproveitando os arrays formados pelo Object.entries
        vamos iterar cada array e definir no elemento
        uma propriedade e volor.
    */
    attributeAsArray.forEach(([key, value]) => {
        element.setAttribute(key, value);
    });

    return element;
}

export default fnCreateElement ;