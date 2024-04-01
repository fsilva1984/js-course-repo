


async function weather(cityName) {
    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=78029d8fbb9c1290617317d54086a851`

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            successly(data)

        } else {
            throw new Error('Lamento cidade não foi encontrada');
        }
        
    } catch (error) {
        errorMessage(error)
    }
}

button.addEventListener('click', () => {
    weather(input.value);
})


function errorMessage(params) {
    error.textContent = params.message;
    console.log(params.message);
  
}

function successly(params) {
    nameCity.textContent = params.name;
    weatherInfo.textContent = kelvinToCelsius(params.main.temp);
    descriptionWeather.textContent = params.weather[0].description;
    windSpeed.textContent = params.wind.speed;
    airHumidity.textContent = params.main.humidity;

    backGround(params.weather[0].main);
    console.log(params);
}


