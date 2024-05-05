
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { addDoc, collection, getFirestore, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";


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
const docsCollection = collection(db, 'users')

const name = document.querySelector('#input-name');
const age = document.querySelector('#input-age');
const tel = document.querySelector('#input-tel');
const er = document.querySelector('.error')
const su = document.querySelector('.success')
const bt = document.querySelector('#bt');
const entries = document.querySelectorAll('input');


name.addEventListener('input', () => {
    if (name.value) {
        name.value = name.value.replace(name.value, capitalize(name.value));
    }
});


function capitalize(str) {
    str = str.toLowerCase();

    str = str.split(' ');

    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }

    return str.join(' ');
}


tel.addEventListener('input', () => {
    if (tel.value) {

        if (/^\d{2}/.test(tel.value)) {
            tel.value = `(${tel.value[0] + tel.value[1]})`;
        }
    }
})


const clearFields = () => {

    entries.forEach(input => {
        input.value = ''
        setTimeout(() => {
            er.style.display = 'none'
            su.style.display = 'none'
        }, 5000)
    });

}


bt.addEventListener('click', (e) => {
  
    e.preventDefault();
    const field = document.querySelector('.field-empty')

    let boolean = [];
    entries.forEach(input => {

        if (input.value == '') {
            boolean.push(false)
        } else {
            boolean.push(true)
        }
    });

    if (boolean.includes(false)) {
        field.style.display = 'block'
    } else {
        field.style.display = 'none'


        addDoc(docsCollection, {
            name: name.value,
            age: age.value,
            tel: tel.value,
            date: serverTimestamp()
        })
            .then(doc => {
                su.textContent = `Success! ID: ${doc.id}`;
                localStorage.setItem(tel.value, doc.id);
                su.style.display = 'block';
                clearFields()
            })
            .catch(error => {
                console.log(error);
                clearFields()
                er.textContent = `Error!`;
                er.style.display = 'block';
            })
    }
});
