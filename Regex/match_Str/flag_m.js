const log = console.log;

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

