

/*
  06
  
  - Através do array abaixo, gere a mensagem "vinho cozido, tomate cozido, 
    cebola cozida, cogumelo cozido";
  - Exiba a string no console.
*/

const ingredients = ['vinho', 'tomate', 'cebola', 'cogumelo']

const copyIngredients = ingredients.map(item => item);

const final = copyIngredients.reduce((acc, item, index, array) => {
  let correctWordGender = /a$/.test(item) ? 'cozida' : 'cozido';

  if (index === array.length - 1) {
    return acc + `${item} ${correctWordGender}`;
  }

  return acc + `${item} ${correctWordGender}, `;

}, '');

//console.log(final);


const users = [
  { name: 'Marta', age: 22, gender: 'feminino' },
  { name: 'Rodrigo', age: 22, gender: 'masculino' },
  { name: 'Juliano', age: 53, gender: 'masculino' },
  { name: 'Melisa', age: 45, gender: 'feminino' },
  { name: 'Gustavo', age: 33, gender: 'masculino' },
  { name: 'Gisele', age: 34, gender: 'feminino' }
]
const copyUsers = users.map(({ name, age, gender }) => ({ name, age, gender }));

const dataUsers = copyUsers.reduce((acc, item, index, array) => {
  let userGender = /feminino/.test(item.gender) ? 'Sra.':'Sr.'

  if (userGender) {
    
    if (index === array.length -1) {
      return acc + `${userGender} ${item.name}`  
    }
    return acc + `${userGender} ${item.name}/ `
   
  }
}, '');


//console.log(dataUsers);










const topBrazilmovies = [
  { title: 'Vingadores: Ultimato', peopleAmount: 19686119, distributedBy: 'Disney' },
  { title: 'Titanic', peopleAmount: 17050000, distributedBy: 'Paramount / 20th Century' },
  { title: 'O Rei Leão', peopleAmount: 16267649, distributedBy: 'Disney' },
  { title: 'Vingadores: Guerra Infinita', peopleAmount: 14572181, distributedBy: 'Disney' },
  { title: 'Tubarão', peopleAmount: 13035000, distributedBy: 'Universal' },
  { title: 'Nada a Perder', peopleAmount: 11944985, distributedBy: 'Paris Filmes' },
  { title: 'Os Dez Mandamentos', peopleAmount: 11259536, distributedBy: 'Paris / Downtown Filmes' },
  { title: 'Tropa de Elite 2', peopleAmount: 11204815, distributedBy: 'Zazen' },
  { title: 'Os Vingadores', peopleAmount: 10968065, distributedBy: 'Disney' },
  { title: 'Dona Flor e Seus Dois Maridos', peopleAmount: 10735524, distributedBy: 'Embrafilme' }
]




const ul = document.querySelector('.list-group');
let templateHTML = '';

const copyTopBrazilmovies =
  topBrazilmovies.map(({ title, peopleAmount, distributedBy }) => ({
    title, peopleAmount, distributedBy
  }))


const viewsMovieDisney = copyTopBrazilmovies.filter(item => item.distributedBy === 'Disney')
  .map(({ title, peopleAmount }) => { 
    let totalPeople = 0;
    totalPeople += peopleAmount;

    return templateHTML += `
    <li>Title: ${title} Views in Brazil: ${peopleAmount}</li>`
  }).sort((a, b) => a.peopleAmount - b.peopleAmount)
ul.innerHTML = templateHTML;





const pets = [
  { name: 'Boris', age: 4, gender: 'Male', type: 'Dog' },
  { name: 'Jimmy', age: 1, gender: 'Male', type: 'Cat' },
  { name: 'Pérola', age: 2, gender: 'Female', type: 'Dog' },
  { name: 'Lucy', age: 5, gender: 'Female', type: 'Cat' },
  { name: 'Cristal', age: 3, gender: 'Female', type: 'Dog' },
  { name: 'Chico', age: 6, gender: 'Male', type: 'Dog' }
]
