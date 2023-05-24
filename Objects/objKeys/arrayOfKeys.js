
const apostolo = {

  Marcos: {
    Apostolo: true
  },

  Pedro: {
    Apostolo: true
  },

  Judas: {
    Apostolo: true
  },

  Gideão: {
    Apostolo: false
  },
}

function getArrOfApostolos(obj) {

  const ap = Object.keys(obj)

  ap.pop()
  return ap;
}

console.log(getArrOfApostolos(apostolo));










