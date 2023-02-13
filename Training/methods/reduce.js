
const gamers = [
  
  { player: 'Joao', score: [448, 326, 952] },
  { player: 'Marcos', score: [726, 554, 520] },
  { player: 'Lucas', score: [464, 582, 502] },
  { player: 'Atos', score: [614, 470, 913] },
  { player: 'Mirian', score: [623, 871, 616] },
  { player: 'Deborah', score: [510, 814, 713] },
  { player: 'Maria', score: [392, 474, 875] },

]

gamers.map(item => {

  let seeScores = item.score.reduce((acc, val) => { 
    return acc + val
  })

  console.log(`
    ${item.player} - ${seeScores}
  `);

});


