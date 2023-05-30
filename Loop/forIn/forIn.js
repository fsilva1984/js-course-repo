const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  let count = 0

  for (let i in allUsers) {
    if (allUsers[i].online == false) {
      count += 1
    }