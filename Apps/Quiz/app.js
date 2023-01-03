
const log = console.log



const bt = document.querySelector('.bt')

const scoreAnswers = document.querySelector('.h2')

const inputB1 = document.querySelector("#radioB1")
const inputB2 = document.querySelector("#radioB2")
const inputB3 = document.querySelector("#radioB3")
const inputB4 = document.querySelector("#radioB4")

const divScore = document.querySelector('.div-scores')



function checkedInput(param) {

  if (param == 100) return

  if (inputB1.checked === true) param += 25

  if (inputB2.checked === true) param += 25

  if (inputB3.checked === true) param += 25

  if (inputB4.checked === true) param += 25


  return param

}


function scoreAnimator(param) {

  const printScore = document.querySelector(".score")

  let iteraAnimator = 0


  const id = setInterval(() => {

    if (iteraAnimator == param) {

      clearInterval(id)
    }

    printScore.textContent = iteraAnimator

    iteraAnimator += 1
  }, 80)

}


// events button
bt.addEventListener('click', () => {


  divScore.classList.add("show")

  let score = 0


  scoreAnimator(checkedInput(score))


  // Reload page
  setTimeout(() => {
    document.location.reload(true)
  }, 25000)

})




