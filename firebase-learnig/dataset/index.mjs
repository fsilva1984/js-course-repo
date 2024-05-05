



const lis = document.querySelectorAll('li');
const ulDel = document.querySelector(`[data-del="delete"]`)

let id = '';
lis.forEach(li => {
    li.addEventListener('click', e => {

        id = e.target.dataset.remove
        if (e.target.dataset.remove) {
            document.querySelector(`[data-remove="${id}"]`).remove();
        }
    })
})



ulDel.addEventListener('click', e => {
    document.querySelector(`[data-del="delete"]`).remove();

})




















// import { writeFileSync } from 'node:fs';


// function keyStorage() {
//     let file = `{"${name}":"${key}"}`
//     let path = `/home/fs/Dev/Javascript/firebase-learnig/remove-doc-db/keys/${tel}.json`

//     try {
//         writeFileSync(path, file);

//     } catch (error) {

//         console.error(error);
//     }
// }

// console.log(localStorage.getItem('(21)986289078'));