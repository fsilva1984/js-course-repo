
const readline = require("node:readline")

const { stdin: input, stdout: output } = require("node:process")


const rl = readline.createInterface({
  input,
  output
})

//linha de codigo


const players = [
    
  { name: 'John', score: 816 },
  { name: 'Mia', score: 482 },
  { name: 'Carter', score: 611 },
  { name: 'Mia', score: 810 },
  { name: 'Carter', score: 313 },
  { name: 'John', score: 254 },
  { name: 'Carter', score: 814 },
  { name: 'John', score: 725 },
  { name: 'Mia', score: 342 },

]


console.log(` 
[1] - Para ver o jogador com maior pontuacao por rodada.

[2] - Para ver o vencedor
`);

const bySort = players.sort((a,b) => b.score - a.score);

function printScore() {
  
  console.log(`A maior pontuacao marcada em partida foi do player.
    [ ${[...bySort][0].name} ] - [ ${[...bySort][0].score} ]
      
  `)
}




function scoreStoring() {

  let player1 = 0
  let player2 = 0
  let player3 = 0

 
  players.filter(item => {

    if (item.name == "John") {

      player1 += item.score
      return 

    } else if (item.name == "Carter") {

      player2 += item.score
      return 

    } else if (item.name == "Mia") {

      player3 += item.score
      return 
    }

  })
  


  let winer = ''
  let bigScore = 0

  if (player1 > player2 && player1 > player3) {

    winer = "Jonh"
    bigScore = player1
  } else if (player2 > player1 && player2 > player3) {

    winer = "Carter"
    bigScore = player2
  } else if (player3 > player1 && player3 > player2) {

    winer = "Mia"
    bigScore = player3
  }

  console.log(`
        Gamer vencedor
    [ ${winer} ] - [ ${bigScore} ]
  `);
}



 




rl.question("[1/2]: ", (answer) => {


  if (answer == '1') {
      
   printScore()

  }
  


  if (answer == '2') {
    
    scoreStoring()
  
  }
 
  
  rl.close()
})



