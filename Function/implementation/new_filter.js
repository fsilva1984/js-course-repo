
const users = [
  { name: 'John', age: 14 },
  { name: 'Miguel', age: 54 },
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'Bille', age: 10 },
  { name: 'Anna', age: 44 },
  { name: 'Matheus', age: 25 },
  { name: 'Jammyle', age: 43 },
];




(() => {// Com o filter normal

  let usersLess40 = [];
  users.filter((item) => {
    if (item.age >= 20 && item.age <= 40) {
      usersLess40.push(item);
    } 
  });

  console.log(usersLess40);
})();
console.log();

(() => {// Com o filter implementado


  Array.prototype.myFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    };
    return result;
  }; 

  let usersLess40 = [];
  let index = [];
  let reject = [];

  users.myFilter((item, idx) => {
    if (item.age >= 20 && item.age <= 40) {
      idx > 0 ? index.push(idx) : reject.push(idx);
      usersLess40.push(item);
    }
  });

  console.log(usersLess40);
})();
console.log();