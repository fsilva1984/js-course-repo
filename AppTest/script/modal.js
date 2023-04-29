
//modal link https://www.youtube.com/watch?v=kj6GFACwLYo&ab_channel=MatheusBattisti-HoradeCodar

//const btOpen = document.querySelector(".bt-modal-open")
const btClose = document.querySelector(".bt-close-modal")
const modal = document.querySelector(".modal")
const fade = document.querySelector("#fade")


const toggleModal = () => {
  [modal, fade].map(el => el.classList.remove('hide'))

}

btClose.addEventListener("click", toggleModal)


function pressButton() {
  //return [modal, fade].map(el => el.classList.add('hide'))

  modal.classList.add("hide")
  fade.classList.add("hide")
  console.log('fn pressButton Ok!');
}

export { pressButton };

