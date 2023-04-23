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



log("-----------> Using the flag m <------------");


/*

A flag m procura padroes em multiplas linhas
qunado o padrao e esperado no inicio e fim ou 
no inicio ou fim da linha com as flags ^ $
mesmo se ouver uma quebra de linha \n ou \r,
combinacao perfeita sao as flags mg
faz a busca multlinnha e global

*/


function multLine(text) {

  const pattern = /^Flavio/;

  console.log(pattern.test(text));

}


const myText = "Flavio nerugiuerrv \r rgergerg Flavio \n mefmwef Flavio"

multLine(myText)


