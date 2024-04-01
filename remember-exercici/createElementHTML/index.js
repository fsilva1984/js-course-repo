const body = document.querySelector('body');

const h1 = document.createElement('h1');
const header = document.createElement('header');
const input = document.createElement('input');
const button = document.createElement('button');
const main = document.createElement('main');
const div = document.createElement('div');
const ul = document.createElement('ul');
const nameCity = document.createElement('li');
const error = document.createElement('li');
const weatherInfo = document.createElement('li');
const windSpeed = document.createElement('li');
const airHumidity = document.createElement('li');
const descriptionWeather = document.createElement('li');

button.textContent = 'Button';
div.classList.add('body-app');
h1.textContent = 'Weather Now';
input.placeholder = 'City'


body.appendChild(header);
body.insertAdjacentElement('afterbegin', h1);//No inicio do header
header.insertAdjacentElement('beforeend', input);
header.insertAdjacentElement('beforeend', button);//No final do header


div.appendChild(ul);
ul.insertAdjacentElement('afterbegin', nameCity);
ul.insertAdjacentElement('beforeend', descriptionWeather);
ul.insertAdjacentElement('beforeend', weatherInfo);
ul.insertAdjacentElement('beforeend', windSpeed);
ul.insertAdjacentElement('beforeend', airHumidity);


body.appendChild(main);
main.insertAdjacentElement('beforeend', div);



