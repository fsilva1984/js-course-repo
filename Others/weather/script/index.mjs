

/*
    Este modulo pega as informacoes do
    modulo weather e as expoem na pagina
*/

import getWeather from "./weather.mjs"

//Elementos que receberao cada um a sua inf pertinente
const el_lat = document.querySelector('.lat');
const el_lon = document.querySelector('.lon');
const el_temp = document.querySelector('.temp');
const el_info = document.querySelector('.info');
const el_tempMin = document.querySelector('.temp-min');
const el_tempMax = document.querySelector('.temp-max');
const el_humidity = document.querySelector('.humidity');
const el_iconInfo = document.querySelector('.icon-info');
const el_speedWind = document.querySelector('.speed-wind');

// converte kelvin para celsius
const kelvinToCelsius = (param) => {
    return Math.round(param - 273.15)
}

document.querySelector('button')
    .addEventListener('click', e => {
        e.preventDefault();
        const input = document.querySelector('input')

        if (input.value === '') {
            return
        } else {

            getWeather(input.value)
                .then(response => {
                    const {
                        wind,
                        coord,
                        main,
                        weather,
                    } = response;

                    el_speedWind.textContent = `${wind.speed}`
                    el_lat.textContent = `Latitude ${coord.lat}`
                    el_lon.textContent = `Longitude ${coord.lon}`
                    el_temp.textContent = `C° ${kelvinToCelsius(main.temp)}`
                    el_tempMin.textContent = `Min C° ${kelvinToCelsius(main.temp_min)}`
                    el_tempMax.textContent = `Max C° ${kelvinToCelsius(main.temp_max)}`
                    el_humidity.textContent = `~ ${main.humidity}%`
                    console.log(weather[0].description);

                    switch (weather[0].description) {
                        case 'broken clouds':
                            el_info.textContent = 'Parcialmente nublado'
                            el_iconInfo.innerHTML = `<i class="fa-solid fa-cloud"></i>`
                            break;
                        case 'overcast clouds':
                            el_info.textContent = 'Nublado'
                            el_iconInfo.innerHTML = `<i class="fa-solid fa-cloud"></i>`
                            break;
                        case 'few clouds':
                            el_info.textContent = 'Poucas nuvens'
                            el_iconInfo.innerHTML = `<i class="fa-solid fa-cloud-sun"></i>`
                            break;
                        case 'light rain':
                            el_info.textContent = 'Chuva leve'
                            el_iconInfo.innerHTML = `<i class="fa-solid fa-cloud-sun-rain"></i>`
                            break;
                        case 'scattered clouds':
                            el_info.textContent = 'Nuveis dispersas'
                            el_iconInfo.innerHTML = `<i class="fa-solid fa-cloud"></i>`
                            break;
                        case 'moderate rain':
                            el_info.textContent = 'Chuva moderada'
                            el_iconInfo.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy"></i>`
                            break;
                        case 'heavy intensity rain':
                            el_info.textContent = 'Chuva forte'
                            el_iconInfo.innerHTML = `<i class="fa-solid fa-cloud-showers-water"></i>`
                            break;
                    }

                })
                .catch(erro => erro);//
        }
    })