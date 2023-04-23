const log = console.log;
/*

Podemos ignorar variacoes de cases
em caixa alta ou baixa com a flag i

*/



log("----- ignore variations with the flag i ----");
log();


const mixArr = ["str23", "Str56", "str79", "Str100"];

function twoPatterns(params) {

  const patterns = /str/i;

  params.find(item => {

    if (patterns.test(item)) {

      log(item);

    }
  })
}

twoPatterns(mixArr);
