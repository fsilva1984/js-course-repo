

/*

podemos deixar o padrao mais flexisivel
para abrangir mais resultados parecidos
com os cochetes e dentro dos cochetes
o que pode ser capturado como possiveis padroes aceitaveis.
 assim:
 B[uio]m digo que entre B e m
 podera existir um 'u' ou um 'i' e ate um 'o'


*/

const t1 = 'Bum';
const t2 = 'Bom';
const t3 = 'Bim';

function flex(a, b, c) {
  const patterns = /B[iou]m/

  console.log(patterns.test(a));
  console.log(patterns.test(b));
  console.log(patterns.test(c));
}


flex(t1, t2, t3)






