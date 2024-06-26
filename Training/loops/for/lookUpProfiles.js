const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];




function lookUpProfile(name, prop) {

  for (let i = 0; i < contacts.length; i++) {

    if (contacts[i].firstName === name) {

      if (contacts[i].hasOwnProperty(prop)) {

        return contacts[i][prop];
      } else {

        return 'No such property'
      }

    }
  }
  return 'No such contact'

}


/*
fundamento da funcao tem a finalidade de
trazer a propriedade refer4ente ao nome 
que e pasado por argumento.
*/

// resposta



const $ = console.log

$(lookUpProfile("Kristian", "lastName"))// Vos
console.log("-----------------------------------------------------");


$(lookUpProfile("Sherlock", "likes"))//["Intriguing Cases", "Violin"]
console.log("-----------------------------------------------------");


$(lookUpProfile("Harry", "likes"))// arrayconsole.log("-----------------------------------------------------");


$(lookUpProfile("Bob", "number"))// 'No such contact'
console.log("-----------------------------------------------------");


$(lookUpProfile("Bob", "potato"))// 'No such contact'
console.log("-----------------------------------------------------");


$(lookUpProfile("Akira", "address"))// 'No such property'


