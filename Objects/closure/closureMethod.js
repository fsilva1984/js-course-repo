
/*
  Use o fechamento para proteger as propriedades 
  dentro de um objeto de serem modificadas externamente.
*/


function Car() {
  this.printColor = () => {
    this.color = "black";
    return this.color;
  };
};


const fusca = new Car();

fusca.color = "white";

function carColor(obj) { 
  console.log(obj);
}

/*
  Como podemos ver a função carColor 
  espera um parametro,
  porem se passarmos para a função 
  o fusca.color temos uma certa fragilidade pois
  o fusca.color pode ser alterado, ja
  o retorno da fusca.printColor() NÃO!

*/

carColor(fusca.color);
carColor(fusca.printColor());
