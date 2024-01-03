

const criadorDoFirefox = 'Monzilla Developer Network';

const mdn = criadorDoFirefox[0] + criadorDoFirefox[9] + criadorDoFirefox[19];
console.log(mdn);


const theBestMovieYear1982 = `Filme mais comentado e visto foi: "Fliper !"`;
const theBestMovieYear2023 = theBestMovieYear1982.replace("Fliper !", "Jhon Wick 4");

console.log(theBestMovieYear2023);


const firstName = 'walter';

const newName = firstName[0].toUpperCase() + firstName.slice(1, 5);
console.log(newName);

const escola = 'Colegio Monteiro Lobato';

/* Quero toda a string apartir do indice 8*/
console.log(escola.slice(8));