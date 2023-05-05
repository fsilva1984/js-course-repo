
/*

ele descarta todos os alfanumericos e o undercore
e aceita os caracteres especiais

O shothand \W com o dabliu maiusculo 

equivale a [^A-Za-z0-9_]



ele aceita todos os alfanumericos e o undercore
e descarta os caracteres especiais

O shothand \w com o dabliu menusculo 

equivale a [A-Za-z0-9_]


*/


const pattern = /\w/gm


const myStr = 'zap Bom gota shwatzh 43 op.5532'

console.log(myStr.match(pattern))

