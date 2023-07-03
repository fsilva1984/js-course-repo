
/*
  Dois objetos dividindo o mesmo metodo
*/


function Car() { }

const fusca = new Car();

const gol = new Car();


let speed = function(obj) {

  obj.speedUp = function (n) {
    let speeding = 0;
  
    while (speeding <= n) {
      console.log(speeding);
      speeding += 5;
    }

  }
}

speed(fusca);
speed(gol);

fusca.speedUp(90);

console.log();

gol.speedUp(150)


