
const log = console.log


const numbers = [2, 5, 6, 4, 89, 23]

let total = numbers.reduce((acc, item) => {

   return acc + item
})


//log(total)















const gamersScore = [
  { name: 'Paula', score: 1250 },
  { name: 'Victor', score: 832 },
  { name: 'John', score: 389 },
  { name: 'Luiz', score: 630 },
  { name: 'Marcos', score: 1000 },
  { name: 'Anna', score: 890 },
  { name: 'John', score: 507 },
]


const getScore = gamersScore.reduce((acc, item) => {

  if( item.name == "John") {
    acc += item.score
  }
  return acc

}, 0)

log(getScore)


























