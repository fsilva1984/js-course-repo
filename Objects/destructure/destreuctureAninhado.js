



//destructuring in nesteding

const person = {

  2132:{
    name: "Jonh",
    yearsOld: 34,
    likes:["Pizza", "Rock", "Skate"]
  },

  4478:{
    name: "Julia",
    yearsOld: 29,
    likes:["Books", "Ballet", "Movies Action"]
  },

  1612:{
    name: "Rogerio",
    yearsOld: 16,
    likes:["Games", "Movies Action", "Judo"]
  }

}

const { 4478:{ name, yearsOld, likes } } = person

console.log(`

  nome / ${name}
  Idade/ ${yearsOld}
  Mais Gosta/ ${likes[1]}
`);

console.log("---------------------------------------");

// assignment by destructuring nested

const { 1612: { name: Nome, yearsOld: Idade, likes: Gosta } } = person


console.log(`

  nome / ${Nome}
  Idade/ ${Idade}
  Mais Gosta/ ${Gosta[0]}
`);
