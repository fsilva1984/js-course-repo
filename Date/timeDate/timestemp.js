


// Obter uma data espesifica

const past = new Date('1984 May 18  00:00:00');
const present = new Date();


/*

    Quantidade de milesegundos que se passaram
    desde a data que foi definida ate agora

*/
past.getTime();

/*

    Quantidade de milesegundos que se passaram
    desde 1 janeiro de 1970 ate agora

*/
present.getTime();


const difference = present.getTime() - past.getTime();
console.log('milesegundos: ', difference);

const seconds = Math.round(difference / 1000);
console.log('secundos: ', seconds);


const minutes = Math.round(seconds / 60);
console.log('Minutos: ', minutes);


const hours = Math.round(minutes / 60);
console.log('Horas: ', hours);


const days = Math.round(hours / 24);
console.log('Dias: ', days);



const years = Math.round(days / 365);
console.log('Anos: ', years);



