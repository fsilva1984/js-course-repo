//Deus abençoe

const _search = document.querySelector("#input-s")
const _input = document.querySelector("#input-f")

const _form = document.querySelector(".form")

const _ul = document.querySelector(".todos-container")




_form.addEventListener("submit", e => {
  let _ul = document.querySelector(".todos-container")

  e.preventDefault()

  if (!_input.value == '') {

    _ul.innerHTML += `<li class="li list-group-item">
    <span>${_input.value.trim()}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>`


    _input.value = _input.value = ''

  }

})



_ul.addEventListener("click", (e) => {

  const trashElement = e.target

  const trashClass = Array.from(trashElement.classList).includes('delete')

  if (trashClass) {

    trashElement.parentElement.remove()
  }
})


_search.addEventListener("input", evn => {


  let _target = evn.target.value.trim()


  //obtendo e tranformando um HTMLColection em Array
  Array.from(_ul.children).filter(item => {

    /* verifica se o conteudo dos filhos da ul
    da match com que foi passado  por parametro */
    if (item.textContent.includes(_target)) {

      item.classList.add("_visible")

    } else {

      item.classList.add("to-hide")

    }

  })


  if (_target.length == 0) {
    removeAttribute()

  }
  
})


function removeAttribute() {

  let lis = Array.from(_ul.children)
  lis.map(item => {
    item.classList.remove('to-hide')
  })
}