import createEl from './elementsHTM.mjs';


const body = document.querySelector('body');

const btnLeft = createEl('button', { id: 'btn-left' });
const btnRigth = createEl('button', { id: 'btn-rigth' });
const divMain = createEl('div', { id: 'd-container' });
const header = createEl('header', { id: 'h-container' });
const divBtnLeft = createEl('div', { class: 'b-container' });
const divBtnRigth = createEl('div', { class: 'b-container' });
const separator = createEl('div', { id: 'separator' })
// const img = createEl('img', { id: 'image', src: '' });

btnLeft.innerText = '←';
btnRigth.innerText = '→';

divBtnLeft.appendChild(btnLeft);
divBtnRigth.appendChild(btnRigth);

divMain.appendChild(divBtnLeft);
divMain.appendChild(separator);
divMain.appendChild(divBtnRigth);

header.appendChild(divMain);
body.appendChild(header);

const imagesPath = [
    '/img/call-of-duty.jpg',
    '/img/residente-evil-4.jpg',
    '/img/the-last-of-us.jpg',
    '/img/WZM_Meta.webp',
];
document.querySelector('#d-container').style.background = `url(${imagesPath[0]})`


let i = 0;
function nextImg() {
    (i < imagesPath.length - 1) ? i++ : i = 0;
    document.querySelector('#d-container').style.background = `url(${imagesPath[i]})`
}
document.querySelector('#btn-rigth').addEventListener('click', () => {
    nextImg();
});


function backImg() {
    (i < imagesPath.length - 1 && i > 0) ? --i : i = 0;
    document.querySelector('#d-container').style.background = `url(${imagesPath[i]})`
}
document.querySelector('#btn-left').addEventListener('click', () => {
    backImg();
});


function slideCarousel() {
    //let i = 0;
    setInterval(() => {

        (i < imagesPath.length - 1) ? i++ : i = 0;
        document.querySelector('#d-container').style.background = `url(${imagesPath[i]})`;

    }, 7000)
}
slideCarousel();


