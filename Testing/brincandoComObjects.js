
// declaracao literal de obj
const user = {
  name: 'Joao',
  age: 31,
  email: 'joao31@mymail.com',
  cyte: 'Sao Paulo'
};

// acesso apropriedades
console.log(user.name);
console.log(user['age']);

const { email } = user;
console.log(email);

// modificando os valores das propriedades
user.name = 'Felipe';
user['age'] = 41;

let { cyte } = user
cyte = 'Recife';

console.log(`${user.name}\n${user['age']}\n${cyte}`);


const numbers = {
  arr1: [23, 80, 56, 47],
  arr2: [32, 45, 86, 79, 92],
  sum: function (array) {
    let total = 0;
    array.forEach(e => { total += e });
    return total;
  }

}


const {arr1: nums} = numbers;

let n = 0;
nums.forEach(e => {
  n += e;
});

console.log(n);

console.log(numbers.sum(numbers.arr2));



function getUser(type) {
  const user = {
    name: 'Joao',
    age: 31,
    email: 'joao31@mymail.com',
    cyte: 'Sao Paulo'
  }
  return user[type];
}

console.log(getUser('age'));




























