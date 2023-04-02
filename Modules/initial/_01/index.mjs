
/*

Para a importação funcionar 
deve adicionar a o arquivo package.jsom
"type" : "module"
ou usar a extenção .mjs

tanto no import quanto no export

se for em uma arquivo html 
deve usar na tag script a propriedade
type="module"

*/



import { sum, sub, mult, div, pow, sqrt } from "../_00/app.mjs";


function mathOperations(x, y, z) {


  switch (z) {

    case '+':
      console.log(`Funcao de 'Adicao' `);
      sum(x, y);
      break;

    case '-':
      console.log(`Funcao de 'Subtracao' `);
      sub(x, y);
      break;

    case '*':
      console.log(`Funcao de 'Multiplicasao' `);
      mult(x, y);
      break;

    case '/':
      console.log(`Funcao de 'Divisao' `);
      div(x, y);
      break;

    case '**':
      console.log(`Funcao de 'Exponenciacao' `);
      pow(x, y);
      break;

    default:
      console.log(`Funcao de 'Raiz Quadrada' `);
      sqrt(x);
      break;
  }
}

mathOperations(25, 13, '*')










