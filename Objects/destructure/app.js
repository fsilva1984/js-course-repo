const log = console.log

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');


const rl = readline.createInterface({ input, output });



const president = {

  err() {
    log("Escolha uma das opções e respoda com o numero referente.")
  },

  sarney() {
    log('Errou, José Sarney foi o 31.º Presidente do Brasil')
  },

  figueredo() {
    log(`
  Parabeins,
  João Figueiredo foi 30.º Presidente do Brasil
  Período	15 de março de 1979
  até 15 de março de 1985`)
  },

  geisel() {
    log(`Errou, Ernesto Geisel foi o 29.º Presidente do Brasil`)
  },


  vargas() {
    log(`Errou, Getúlio Vargas foi o 17.º Presidente do Brasil `)
  }


}

const { sarney, figueredo, geisel, vargas, err } = president



log(`
    Quem foi o 30.º
  Presidente do Brasil
  ______________________
  |                    |
  | [1] José Sarney    | 
  | [2] João Figueiredo|
  | [3] Ernesto Geisel |
  | [4] Getúlio Vargas |
  |____________________|


`)


// aqui obtem o valor do usuario e lhe da a resposta
rl.question('Escolha um numero: ', (answer) => {

  if (answer != Number()) err()

  if (answer == 1) sarney()

  if (answer == 2) figueredo()

  if (answer == 3) geisel()

  if (answer == 4) vargas()

  rl.close();
});






