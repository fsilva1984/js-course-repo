
const names = ['Silvia', 'Rodrigo', 'Plinio', 'Ivan', 'Anna'];

// quero apenas 2 comecando do indice 0.
console.log(names.slice(0, 2));

// quero retirar 2 ficar com o resto.
console.log(names.slice(2));

// quero a primeira letra da string do indice 0.
console.log(`"${names[0].slice(0, 1) }"`);

// primeira letra de todas as strings do array
names.forEach(i => { console.log(i.slice(0, 1)) });

for (let i = 0; i < names.length; i++) {
  let array = [];
  array.push(names[i][0].toLowerCase());

  console.log(array);
}


console.log(`" ${names.slice(1, 2)} ${names.slice(0, 1)} "`);

for (let i = 0; i < names.length - 1; i++) {

  console.log(`Nome: ${names[i + 1]} Sobrenome: ${names[0]}`);
}

const palavra = names[1].slice(0, 3) +
  names[2][names[2].length - 1] +
  names[0].slice(3);

console.log('" ' + palavra.toUpperCase() + ' "');