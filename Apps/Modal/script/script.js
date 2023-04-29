
// para terminar o modal link https://www.youtube.com/watch?v=kj6GFACwLYo&ab_channel=MatheusBattisti-HoradeCodar

const btOpen = document.querySelector(".bt-modal-open")
const btClose = document.querySelector(".bt-close-modal")
const modal = document.querySelector(".modal")
const fade = document.querySelector("#fade")


const toggleModal = () => {
  [modal, fade].map(el => el.classList.toggle('hide'))
  
}

function pressButton() {
  
  [btOpen, btClose].forEach(el => {

    el.addEventListener("click", toggleModal)
  })
}


pressButton();