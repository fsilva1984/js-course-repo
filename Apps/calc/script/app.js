
//                        **********

// ###################### MODULO -1 #################################//
const screen = document.querySelector('.screen');
const btNum = document.querySelectorAll('.bt-num');
const btAction = document.querySelectorAll('.bt-action');
const operators = document.querySelectorAll('.operators');
const resultScreen = document.querySelector('.result');

// array para guardar os valores digitados
const array = [];

// escuta o evento click na classe de botoes de 0 - 9
btNum.forEach(item => {
    item.addEventListener('click', e => {
        let el = e.target.textContent;
        inDisplay(el);
        array.push(el);
    });
});

// escuta o evento click na classe de botoes das operacoes aritimeticas
operators.forEach(item => {
    item.addEventListener('click', e => {
        let el = e.target.textContent;
        
        if (el !== '√') {

            if (el === 'x') {
                inDisplay(el);
                array.push('*');
                return
            }
            inDisplay(el);
            array.push(el);
        }

        if (el == '√') {
            let str = retrieveValueFromArray(array);
            displayUpdate(sqr(str));
            clean(array);
        }

    });
});

// escuta o evento click na classe de botoes ( acao, delete, clean, e equal )
btAction.forEach(item => {
    item.addEventListener('click', e => {
        let el = e.target.textContent;
        if (el === 'AC') {
            clean(array);
            resultScreen.textContent = '';
        }

        if (el === 'DEL') {
            let update = deleteOne(array, screen.textContent);
            screen.textContent = update;
        }

        if (el === '=') {
            let just = retrieveValueFromArray(array);
            displayUpdate(resolve(just));
            clean(array);
        }
    });
});
//###################################################################//


//                        ***********


// ###################### MODULO -2 #################################//

// mostra no display resultado das operacoes
function displayUpdate(p) {
    resultScreen.textContent = p;
}

// mostra no display os valores digitados
function inDisplay(p) {
    screen.textContent += p;
}

// resolve as operacoes basicas
function resolve(p) {
    return (eval(p));
}

// limpa o array e o display
function clean(p = []) {
    p.splice(0, p.length);
    screen.textContent = '';
    console.log(p);
}

// resgata os valors do array devolvendo em forma de string unica.
function retrieveValueFromArray(p = []) {
    let str = '';
    for (let i = 0; i < p.length; i++) {
        str += p[i];
    }
    return str;
}

// deleta o ultimo numero mostrado na tela e no array
function deleteOne(p = [], str) {
    p.pop();
    const len = str.length - 1;
    const str2 = str.substring(0, len);
    return str2;
}

// extrai a raiz quadrada do numero
function sqr(str) {
    let num = Number(str);
    return Math.sqrt(num);
}
//###################################################################//
