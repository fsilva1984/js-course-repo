const btn = document.querySelector(".btn")
const peso = document.querySelector("#c-1")
const info = document.querySelector(".result")
const altura = document.querySelector("#c-2")
const textInfo = document.querySelector(".textInfo")


const resp = [
  "Desnutricao",
  "Abaixo do Peso",
  "Peso Normal",
  "Acima do Peso",
  "Obesidade Grau 1",
  "Obesidade Grau 2",
  "Obesidade Grau 3",
]



function calc() {
  const result = peso.value / (altura.value ** 2);

  if (result < 16.9) {
    textInfo.textContent = resp[0];

  } else if (result > 18 && result < 18.4) {
    textInfo.textContent = resp[1];

  } else if (result > 18.5 && result < 24.9) {
    textInfo.textContent = resp[2];

  } else if (result > 25 && result < 29.9) {
    textInfo.textContent = resp[3];

  } else if (result > 30 && result < 34.9) {
    textInfo.textContent = resp[4];

  } else if (result > 35 && result < 40) {
    textInfo.textContent = resp[5];

  } else { textInfo.textContent = resp[6] }
}


btn.addEventListener("click", () => {

  calc()
  info.removeAttribute('hidden')

  setTimeout(() => {
    info.classList.add('show')
  }, 8)
})

