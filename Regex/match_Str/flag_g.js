
/*

corresponder globalmente; acha todas as correspondências em vez de parar após achar a primeira

*/

const log = console.log;

log("-> find more of one match with the flag g <-");
log();

const str100 = ["str100", "Str100", "str100", "str100", 'Str100'];

function threePatterns(params) {

  const pattern = /str100/g;

  params.find(item => {

    if (item.match(pattern)) {

      log(item);

    }
  })
}

threePatterns(str100)

