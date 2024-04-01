
function backGround(param) {
    const app = document.querySelector('.body-app');
    
    const date = new Date();
    const hours = date.getHours();
    const night =  (hours >= 18 && hours <= 5);
    const day = (hours > 18 && hours <= 5)

    if (param == 'Clouds' && day) {//Drizzle/chuva fina
        app.classList.add('img8');
        console.log(day);
    }
    



}    


// converte kelvin para celsius
const kelvinToCelsius = (param) => {
    return Math.round(param - 273.15)
}