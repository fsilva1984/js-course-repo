

const Main = function (names) { this.names = names };

Main.prototype.del = function (index) { 

  const beforeIndex = this.names.splice(0, index);
  const afterIndex = this.names.splice(index + 1);

  this.names = beforeIndex.concat(afterIndex);

  console.log(this.names);
};

const subMain = new Main(['Joao', 'Pedro', 'Davi', 'Jose', 'Neto']);

//subMain.del(1);

console.log();


// uso do splice()
const arr = ['Joao', 'Pedro', 'Davi', 'Jose', 'Neto'];
const array = [...arr];

const index = 4;
let count = 0;

while (count <= index) {

  const n1 = arr.splice(0, count);
  const n2 = array.splice(count + 1);

  const result = n1.concat(n2);

  console.log(result);
  count++;
}
//console.log(n2);
















