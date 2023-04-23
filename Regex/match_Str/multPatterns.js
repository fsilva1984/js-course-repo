
/*

Quando precisamos testar mais de um padrao
podemos usar o Operador logico OR o |
para testart se esse ou aquele padrao passa

*/

const log = console.log;

const arr = ["str23", "str56", "str79", "str100"];

log("--------- Use operator logic Or -----------");
log();

function onePattern(params) {
  const patterns = /str100|str79/;

  params.find((item) => {

    if (patterns.test(item)) {

      log(item);

    }
  });
}

onePattern(arr);
