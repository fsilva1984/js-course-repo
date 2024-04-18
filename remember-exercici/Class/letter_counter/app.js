
const textarea = document.querySelector('#box-text');
const indicator = document.querySelector('#indicator');


textarea.addEventListener('input', e => {

    let character = e.target.value;
    let index = character.length - 1;
    let n = character.charCodeAt(index);

    if (n != 32) {
        indicator.innerText = index + 1;
    }


});
