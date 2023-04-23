log("--------- Use operator logic Or -----------");
log();

function onePattern(params) {
  const patterns = /str100|str79 /;

  params.find((item) => {

    if (patterns.test(item)) {

      log(item);

    }
  });
}

onePattern(arr);
