import createEl from "./create_element.mjs";
import Clock from "./clock.mjs";


const main = new createEl('div', { id: 'main', class: 'container' })
const divMain = main.defineAttributes();


const clock = new Clock(divMain);
clock.start();
//clock.stop();

const body = document.querySelector('body');
body.appendChild(divMain);

