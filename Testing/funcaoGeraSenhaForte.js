(function () { 


  /*  funcoes para gerar senha forte
    padrao da senha A0Aaa&aA00&a
    3 letras Maiusculas 
    3 letras Menusculas
    2 simbulos
    6 numeros 
  */


  function randNum() {
    const n = Math.floor(Math.random() * (10 - 1) + 1);
    const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return number[n];
  }

  function randLowAlfabet() {
    const alfa = Math.floor(Math.random() * (13 - 0) + 0);
    const alfabetMen = ['k', 'l', 'm', 'n', 'o', 'p',
      'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    return alfabetMen[alfa];
  }


  function randUpperAlfabet() {
    const alfa = Math.floor(Math.random() * (10 - 0) + 0);
    const alfabetMai = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    return alfabetMai[alfa];
  }

  function randSymbol() {
    const ranSymb = Math.floor(Math.random() * (6 - 1) + 1);
    const symbol = ['_', '$', '@', '*', '&', '#'];

    return symbol[ranSymb];
  }

  function printSenha() {

    const array = [
      randUpperAlfabet(),
      randNum(),
      randUpperAlfabet(),
      randLowAlfabet(),
      randLowAlfabet(),
      randSymbol(),
      randLowAlfabet(),
      randUpperAlfabet(),
      randNum(),
      randNum(),
      randSymbol(),
      randLowAlfabet(),
    ];

    let element = '';
    array.forEach(value => {
      element += value;
    });
    return element;
  }

  console.log(printSenha());



})();