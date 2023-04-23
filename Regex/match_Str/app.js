const log = console.log;


log("-------------- find pattern ----------------");
log();

let msg = "This  String found";

let pattern = /String/;

console.log(pattern.test(msg));


log("------- find pattenr with method match -----");
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


