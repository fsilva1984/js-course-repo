import { pressButton } from "./modal.js";



const btn = document.querySelector(".btn")
const peso = document.querySelector("#c-1")
const info = document.querySelector(".result")
const altura = document.querySelector("#c-2")
//const modal = document.querySelector("#c-3")
const p = document.querySelector("#p-modal")


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
    p.textContent = `${resp[0]} seu imc: ${result.toFixed(1)}`;

  } else if (result > 18 && result < 18.4) {
    p.textContent = `{resp[1]} seu imc: ${result.toFixed(1)}`;

  } else if (result > 18.5 && result < 24.9) {
    p.textContent = `${resp[2]} seu imc: ${result.toFixed(1)}`;

  } else if (result > 25 && result < 29.9) {
    p.textContent = `${resp[3]} seu imc: ${result.toFixed(1)}`;

  } else if (result > 30 && result < 34.9) {
    p.textContent = `${resp[4]} seu imc: ${result.toFixed(1)}`;

  } else if (result > 35 && result < 40) {
    p.textContent = `${resp[5]} seu imc: ${result.toFixed(1)}`;

  } else { p.textContent = `${resp[6]} seu imc: ${result.toFixed(1)}` }
}


btn.addEventListener("click", () => {

  pressButton()
  calc()

})

