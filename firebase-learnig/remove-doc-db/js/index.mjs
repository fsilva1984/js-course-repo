
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { collection, getDocs, getFirestore, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDvOlcsAUz2tbkUBaMpbBv7_NSTY3a3vQA",
    authDomain: "app-db-7e364.firebaseapp.com",
    projectId: "app-db-7e364",
    storageBucket: "app-db-7e364.appspot.com",
    messagingSenderId: "179511332418",
    appId: "1:179511332418:web:79f217074ae7295fce67db",
    measurementId: "G-FJTL591823"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

getDocs(collection(db, 'users'))
    .then(snapshot => {
        snapshot.docs.forEach(doc => {
            const { name, age, tel, date } = doc.data();
            let d = date.toDate();

            dataShow(name, age, tel, d.toString().slice(0, 25), doc.id);
        })
    })
    .catch(console.error)


const btConfirm = createEl('button', { id: 'confirm', 'data-remove': '#' });
const btCancel = createEl('button', { id: 'cancel' });
const fade = createEl('div', { id: 'fade', class: 'show' });
const modal = createEl('div', { id: 'modal', class: 'show' });
const msgTagP = createEl('p', { id: 'msg' });

msgTagP.textContent = 'Confirm DELETE document?'
btConfirm.textContent = 'Confirm'
btCancel.textContent = 'Cancel'

document.querySelector('#main').append(fade, modal);
document.querySelector('#modal').append(msgTagP, btConfirm, btCancel);


function dataShow(name, age, tel, date, id) {
    const container = document.querySelector('.container');

    const ul = createEl('ul', { 'data-del': id });
    const btn = createEl('button', { 'data-btdel': id, class: 'bt' });
    btn.textContent = 'delete'

    const liName = document.createElement('li');
    const liAge = document.createElement('li');
    const liTel = document.createElement('li');
    const liDate = document.createElement('li');
    const liID = document.createElement('li');

    liName.textContent = `nome: ${name}`;
    liAge.textContent = `idade: ${age}`;
    liTel.textContent = `tel: ${tel}`;
    liDate.textContent = `data: ${date}`;
    liID.textContent = `id: ${id}`;

    ul.append(liName, liAge, liTel, liDate, liID);
    container.append(ul, btn);




    document.querySelectorAll('.bt').forEach(btn => {
        btn.addEventListener('click', () => {

            document.querySelectorAll('.show')
                .forEach(div => div.style.display = 'block')
        })
    })


    let id_doc = '';
    document.addEventListener('click', e => {
        id_doc = e.target.dataset.btdel;

        document.querySelector('#confirm').addEventListener('click', () => {
    
            document.querySelectorAll(`[data-del="${id_doc}"]`)
                .forEach(element => {
                    if (id_doc) {
                        element.remove()
                    }
                });

            document.querySelectorAll(`[data-btdel="${id_doc}"]`)
                .forEach(element => {
                    if (id_doc) {
                        element.remove()
                    }
                });

            deleteDoc(doc(db, 'users', id_doc))
            document.querySelectorAll('.show')
                .forEach(div => div.style.display = 'none')
        });
    })
}



// function create elements
function createEl(el, obj) {
    const element = document.createElement(el);
    const arrayOfAttr = Object.entries(obj);
    arrayOfAttr.forEach(attr => {
        element.setAttribute(attr[0], attr[1]);
    })

    return element;
}


// cancel delete documents
document.querySelector('#cancel').addEventListener('click', () => {
    document.querySelectorAll('.show')
        .forEach(div => div.style.display = 'none')
});


// const btn = createEl('button', { id: 'test' });

// const btConfirm = createEl('button', { id: 'confirm', 'data-remove': '#' });
// const btCancel = createEl('button', { id: 'calcel' });
// const fade = createEl('div', { id: 'fade', class: 'show' });
// const modal = createEl('div', { id: 'modal', class: 'show' });
// const msgTagP = createEl('p', { id: 'msg' });

// msgTagP.textContent = 'Confirm DELETE document?'
// btConfirm.textContent = 'Confirm'
// btCancel.textContent = 'Cancel'

// document.querySelector('body').append(fade, modal, btn);
// document.querySelector('#modal').append(msgTagP, btConfirm, btCancel);



// document.querySelector('#test').addEventListener('click', () => {
//     document.querySelectorAll('.show').forEach(div => {
//         div.style.display = 'block';
//     })
// })







