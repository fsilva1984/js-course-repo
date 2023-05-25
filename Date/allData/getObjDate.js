
const present = new Date()
console.log();

console.log(present);
console.log();

console.log(present.toDateString());
console.log();

console.log(present.toTimeString());
console.log();

console.log(present.toLocaleString());
console.log();

// mostra o ano atual
console.log('getFullYears', present.getFullYear());
console.log();

//  mes do ano 1-12 lembrando que e zero base
console.log('getMonth', present.getMonth());
console.log();

// dia do mes 1-30 lembrando que e zero base
console.log('getDate', present.getDate());
console.log();

// dia da semana 1-7 lembrando que e zero base
console.log('getDay', present.getDay());
console.log();

/* Mostra quantos Milissegundoas ja se passaram desde
 1 de Jan de 1970 ate o momento atual */
console.log('getTime', present.getTime());
console.log();


console.log('getHours', present.getHours());
console.log();


console.log('getMinutes', present.getMinutes());
console.log();


console.log('getSeconds', present.getSeconds());
console.log();




