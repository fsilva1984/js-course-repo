
const car = {
    motor: [
        {nwx: 3284653},
        {chass: "34234.235934.2342-24"}
    ],

    cor: {
        black: "22%",
        red: "74%",
        oth: "4%"
    },

    modelo: {
        factory: "fiat",
        type: "utilyte"
    },

    ano: {
        fac: "12/02/2002",
        release: "21/04/2002"
    }

}

// copia rasa
const car2 = { ...car }

//copia profunda
const newCar2 = JSON.parse(JSON.stringify(car2));

newCar2.motor[0].nwx = true;


for (key in car) {
    console.log(car[key]);
}

console.log();

for (key in newCar2) {
    console.log(newCar2[key]);
}

