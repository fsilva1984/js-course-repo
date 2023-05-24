


let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 48,
    online: true
  },

};


function isEveryoneHere(userObj) {

  return ["Alan", "Jeff", "Sarah", "Ryan"].map(name => {

    if (name in userObj) {
      return true
    }

    return false

  })

}



const arr = ["Alan", "Jeff", "Sarah", "Ryan"]

function isEveryoneHere2(userObj) {
  let has = ''

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] in userObj) {
      has += ' ' + true
    } else {
      has += ' ' + false

    }

  }
  return has;

}


function isEveryoneHere3(userObj) {

  return "Alan" in userObj &&
    "Jeff" in userObj &&
    "Sarah" in userObj &&
    "Ryan" in userObj;
}


console.log(isEveryoneHere3(users));

console.log(isEveryoneHere2(users));

console.log(isEveryoneHere(users));

