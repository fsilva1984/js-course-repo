

// const wid = window.screen.width;
// const main = document.querySelector('.grid-container');

const body = document.querySelector('body');
const color1 = document.querySelector('#color-1');
const color2 = document.querySelector('#color-2');
const color3 = document.querySelector('#color-3');
const color4 = document.querySelector('#color-4');

color1.addEventListener('click', () => {
    body.style.backgroundColor = '#a57fff'
})
color2.addEventListener('click', () => {
    body.style.backgroundColor = '#3a9b3a'
})
color3.addEventListener('click', () => {
    body.style.backgroundColor = '#181A1B'
})
color4.addEventListener('click', () => {
    body.style.backgroundColor = 'red'
})
