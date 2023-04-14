import { validationCEP, fetchCep } from "./mod_sys/mod_states.js"

const cep = document.querySelector("#c-5")
const form = document.querySelector("form")

fetchCep(cep.value)
form.addEventListener("submit", evn => {
  evn.preventDefault();
  validationCEP(cep.value)
})





