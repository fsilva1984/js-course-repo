


const Car = function () { };

//função acelerar
Car.prototype.speed = function (n) {
  const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  /*
  se o parametro passado e maior que o indice do array
  o array sera iterado ate o inidce 10 */
  if (n > arr.length) {
    this.speed(10 - 1);
    console.log(arr[10 - 1]);

  } else if (n > 0) {
    this.speed(n - 1);
    console.log(arr[n - 1]);
  }
}

function Fusca() { };

Fusca.prototype = Object.create(Car.prototype);

// Comente a linha a baixo e veja de que brasilia e filho
Fusca.prototype.constructor = Fusca;

const brasilia = new Fusca();

//console.log(brasilia.constructor);
brasilia.speed(15)







