
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { collection, doc, getDocs, getFirestore } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

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

const arrayData = [];

const queryDatabase = async () => {
    const getSnapshot = await getDocs(collection(db, "users"))
    getSnapshot.docs.forEach(doc => {
        arrayData.push(doc.data())
    });
}
queryDatabase();

const bt = document.querySelector('#bt');
const input = document.querySelector('#inpt')

const render = (obj) => {
    const _ul = document.querySelector('[data-js="data-user"]');
    const _name = document.querySelector('.name');
    const _age = document.querySelector('.age');
    const _tel = document.querySelector('.tel');
    const _date = document.querySelector('.date');
    const _doc_id = document.querySelector('.doc_id');

    console.log(doc);
    const { name, age, tel, date } = obj;

    let d = date.toDate();

    _name.textContent = `Nome: ${name}`;
    _age.textContent = `Idade: ${age}`;
    _tel.textContent = `Tel: ${tel}`;
    _doc_id.textContent = `ID: ${doc.id}`;
    _date.textContent = `Data: ${d.toString().slice(0, 25)}`;
    _ul.style.display = 'block';
}

input.addEventListener('input', () => {
    if (input.value) {
        input.value = input.value.replace(input.value, capitalize(input.value));
    }
})
function capitalize(str) {
    str = str.toLowerCase();
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

bt.addEventListener('click', () => {

    if (input.value) {

        let boolean = arrayData.includes(input.value);
        if (!boolean) {
            document.querySelector('#not-found').style.display = 'block';
        }

        arrayData.filter(user => {
            if (user.name == input.value) {
                document.querySelector('#not-found').style.display = 'none';
                render(user);
            }
        });
    }

    input.value = '';
});