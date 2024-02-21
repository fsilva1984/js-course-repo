

const key_ = document.querySelector('#key_');
const value_ = document.querySelector('#value_');

const add = document.querySelector('#add');
const del = document.querySelector('#del');
const cls = document.querySelector('#clen');
const getdata = document.querySelector('#getData');
const table = document.querySelector('table');

/*
 Obter todas as chaves
 Object.keys(localStorage);

*/


add.addEventListener('click', () => {

    if (key_.value !== '' && value_.value !== '') {

        localStorage.setItem(key_.value, value_.value)
        key_.value = null;
        value_.value = null;
    }
});



getdata.addEventListener('click', () => {
    const keys = Object.keys(localStorage);
    const tds = document.querySelectorAll('.td');
    
    if (tds.length > localStorage.length) {
        console.log(tds.length, localStorage.length);
        return

    } else if (tds.length < localStorage.length){
        
        let template = '';
        for (let i = 0; i < localStorage.length; i++) {

            template += `
            <tr class="_ rm">
            <td class="_ rm td">${keys[i]}</td>
            <td class="_ rm td">${localStorage.getItem(localStorage.key(i))}</td>
            </tr>
            `
        }
        table.insertAdjacentHTML('beforeend', template);
    }
});
 

del.addEventListener('click', () => {
    document.querySelectorAll('.rm').forEach(item => {
        console.log(item.textContent == key_.value);
    })
    if (key_.value !== '') {
        localStorage.removeItem(key_.value)
        alert(`${key_.value} excluido da storage`);
        key_.value = null;
        value_.value = null;
    }
});

cls.addEventListener('click', () => {
    document.querySelectorAll('.rm').forEach(item => item.remove())
    localStorage.clear();
    key_.value = null;
    value_.value = null;
});

