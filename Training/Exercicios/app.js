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


// resposta

/*

function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return 'No such property';
      }
    }
  }
  return 'No such contact';
}

*/






function lookUpProfile(name) {
  let answerForNames = '';
  let answerForProps = '';

  contacts.filter(obj => {



    if (name == obj.fistName) {
      answerForNames = obj.fistName
    } else {
      answerForNames = 'No such contact'
    }


  })

  return `${answerForNames}`

}




lookUpProfile('Akira')


/*


    if (obj.hasOwnProperty(prop)){
         answerForProps = obj[prop]
        } else {
      answerForProps = 'No such property'
    }
    






  for (let i = 0; i < contacts.length; i++) {
       answerForProps += " " + contacts[i][prop]
    }

 contacts.filter(obj => {
    

   answerForProps = obj.prop
  
    
    
  });

    if (name == obj.firstName) {
       answerForNames = obj.firstName
  } else {
      answerForNames = 'No such contact'
  };


  
    if(prop == obj.prop) {
      
      answerForProps = obj.prop
    } else {
      answerForProps = 'No such property'
    }


function lookUpProfile(prop) {
let contactName = '';
  let val = ''
  
 contacts.filter(obj => {
   contactName += " " + obj.val;
 });
  
 if (contactName == name) {
   return contactName;
 } else {
   return  'No such contact';
 };
 
  
  if (contact[]prop) {
    return contactProp;
  }

  
};

lookUpProfile('firstName')



console.log("-----------------------------------------------------");

lookUpProfile("Kristian", "lastName");
console.log("-----------------------------------------------------");

lookUpProfile("Sherlock", "likes");
console.log("-----------------------------------------------------");

lookUpProfile("Harry", "likes");
console.log("-----------------------------------------------------");

lookUpProfile("Bob", "number");
console.log("-----------------------------------------------------");

lookUpProfile("Bob", "potato");
console.log("-----------------------------------------------------");

lookUpProfile("Akira", "address");
console.log("-----------------------------------------------------");

*/



/*

lookUpProfile("Kristian", "lastName")// Vos

lookUpProfile("Sherlock", "likes")//["Intriguing Cases", "Violin"]

lookUpProfile("Harry", "likes")// array

lookUpProfile("Bob", "number")// 'No such contact'

lookUpProfile("Bob", "potato")// 'No such contact'

lookUpProfile("Akira", "address")// 'No such property'

