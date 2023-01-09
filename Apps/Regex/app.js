

const btn = document.querySelector("button")

const msg = document.querySelector(".p-msg")

const field = document.querySelector("input")

const form = document.querySelector("form")


form.addEventListener("submit", evnt => {
  evnt.preventDefault()
  evnt.stopPropagation()
  pattern()
})

const isError = _ => {
  const leng = field.value.length
  if (leng < 8) {
    field.classList.add("invalid")
  } else {
    field.classList.remove("invalid")
  }

}

field.addEventListener("keyup", isError)


function pattern() {

  const regex = new RegExp("^[0-9a-zA-Z]{8,}$", "gm")
  const isValid = regex.test(field.value)

  if (isValid) {
    msg.textContent = "Is Valid"
    field.classList.add("valid")

  } else {
    msg.textContent = "Don'ts use symbols as [{#$%^|&*@/}]"
    setTimeout(() => {
      location.reload(true)
    }, 5000)

  }

}






