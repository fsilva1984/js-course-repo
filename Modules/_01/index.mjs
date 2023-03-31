
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



import { sum } from "../_00/app.mjs";


const total = sum(23, 56)

console.log(total);










