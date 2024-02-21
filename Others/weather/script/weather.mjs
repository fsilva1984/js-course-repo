


const apy_key = '78029d8fbb9c1290617317d54086a851'

const weather = async cityName => {
    return (await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apy_key}`
    )).json();
}


export default function getWeather(param) {
    return weather(param)

}


