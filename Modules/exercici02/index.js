import { setOptions, setUF, validationCEP } from "./mod_sys/mod_states.js"


const name = document.querySelector("#c-1")
const email = document.querySelector("#c-2")
const cep = document.querySelector("#c-5")
const select = document.querySelector("#c-9")
const opt = document.querySelector(".opt")
const uf = document.querySelector("#c-10")
const form = document.querySelector("form")

setOptions(select)

setUF(uf, select)

form.addEventListener("submit", evn => {
  evn.preventDefault();
  validationCEP(cep)
})





