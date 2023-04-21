const log = console.log;


log("-------------- find pattern ----------------");
log();

let msg = "This  String found";

let pattern = /String/;

console.log(pattern.test(msg));


log("-------- find patenr with method match -----");
log();

const arr = ["str23", "str56", "str79", "str100"];

function foundPattern(_arr) {
  const pattern = /str100/;
  const pattern2 = /str56/;

  for (let i = 0; i < _arr.length; i++) {
    if (_arr[i].match(pattern)) {
      log(_arr[i]);
    }
  }

  _arr.map((item) => {
    if (pattern2.test(item)) log(item);
  });
}

foundPattern(arr);


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

twoPatterns(arr);


log("-> find more of one pattern with the flag g <-");
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





