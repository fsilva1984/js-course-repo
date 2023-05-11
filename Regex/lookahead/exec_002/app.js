
// Set hours
const elHour = document.querySelector("#hours")


function logDate() {

  const d = new Date()

  const hour = d.getHours()
  const min = d.getMinutes()
  const seg = d.getSeconds()

  elHour.innerHTML = `${hour}:${min}:${seg}`

}

setInterval(logDate, 1000)

// get word
const elSearch = document.querySelector("#search")
const elText = document.querySelector("#text-area")


// A fn recebe o valor do input e o converte para um padrao
const thePattern = (param) => {
  const pattern = new RegExp(param, "gim")
  return pattern
}

const isMatch = (param) => {
  const txt = elText.value
  const arr = txt.match(param)
  let val = '';

  if (txt.match(param)) {
    arr.map(item => val += ' ' + item)
    return val;

  } else {
    return [false]
  }

}

elSearch.addEventListener("keyup", evnt => {
  const target = evnt.key;
  const returnedRegex = thePattern(elSearch.value)

  if (target === 'Enter') {
    console.log(isMatch(returnedRegex));
    elText.value = elText.value = isMatch(returnedRegex)
  }
})




