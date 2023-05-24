
/*
  Verificando usuarios loggados
  com o for in
*/

const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: true
  }
}

function countOnline(allUsers) {
  let count = 0
  for (let i in allUsers) {

    if (allUsers[i].online === true) count++;
  }
  return count
}

console.log(countOnline(users));






