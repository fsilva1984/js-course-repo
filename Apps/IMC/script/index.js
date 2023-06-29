import { pressButton } from "./modal.js";



const btn = document.querySelector(".btn")
const peso = document.querySelector("#c-1")
const altura = document.querySelector("#c-2")
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




/*
 - UPGRADE 
 - funcao que calcule o menor peso possivel
 e o maior peso possivel para informar a media de
 peso ideal ao usuario

    **feito**
 - Colocar um ponto automaticamente apos o primeiro digito
 retirando a obrigacao do usuario de digitar o ponto
*/

function punctuation() {
  const regex = new RegExp(/(\d{1})(\d{2})/);
  const rg = /^\d\.\d{2}/;
  const pattern = altura.value;

  if (rg.test(pattern)) {
    console.log("Ok");
  } else if(pattern.length == 3){
    altura.value = pattern.replace(regex, "$1.$2");
  };
};

altura.addEventListener("keyup", punctuation);

function calc() {
  const result = peso.value / (altura.value ** 2);
  const any1 = peso.value
  const any2 = altura.value

  if (any1.length !== 0 && any2.length !== 0) {


    if (result < 16.9) {
      p.textContent = `${resp[0]} seu imc: ${result.toFixed(1)}`;

    } else if (result > 18 && result < 18.4) {
      p.textContent = `${resp[1]} seu imc: ${result.toFixed(1)}`;

    } else if (result > 18.5 && result < 24.9) {
      p.textContent = `${resp[2]} seu imc: ${result.toFixed(1)}`;

    } else if (result > 25 && result < 29.9) {
      p.textContent = `${resp[3]} seu imc: ${result.toFixed(1)}`;

    } else if (result > 30 && result < 34.9) {
      p.textContent = `${resp[4]} seu imc: ${result.toFixed(1)}`;

    } else if (result > 35 && result < 40) {
      p.textContent = `${resp[5]} seu imc: ${result.toFixed(1)}`;

    } else if (result > 40 && result < 55) {
      p.textContent = `${resp[6]} seu imc: ${result.toFixed(1)}`
    }


  }
}


btn.addEventListener("click", () => {
  setTimeout(() => {
    pressButton()
    calc()
  }, 500)

})

