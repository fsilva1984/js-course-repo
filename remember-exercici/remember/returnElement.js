

const body = document.querySelector('body');

const createEl = el => document.createElement(el);

const setProperty = (el, obj) => {
    const arrayOfProperty = Object.entries(obj);
    arrayOfProperty.forEach(([key, value]) => el.setAttribute(key, value));
}

const input = createEl('input');

setProperty(input, {
    value: '',
    id: 'input',
    placeholder: 'Name',
})

body.appendChild(input);

