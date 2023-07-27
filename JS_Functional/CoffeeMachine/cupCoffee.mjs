
/*
  Funcao recebe uma quantidade de capsulas
  de cafe e retorna quantos copos de cafe
  ela pode extair de cada capsula.
*/

const cupsCoffee = (() => {
  return (capsule) => {
    const numCupsCoffee = [];
    for (let cup = 1; cup <= capsule * 3; cup++) {
      numCupsCoffee.push("Cup Coffee")
    };
    return `${numCupsCoffee.length} - Cups Coffee`
  }
})();

export { cupsCoffee };
