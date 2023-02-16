


const input = document.querySelector(".input-todo");


const form = document.querySelector(".form");
const trash = document.querySelectorAll(".fa-trash-can")

function createList() {

  let list = document.querySelector(".todo-list");
  let ul = document.querySelector(".ul");

  list = `<li class="todo-list" onclick="del_parentNode(this)">
  <i class="fa-solid fa-trash-can"></i>
  ${input.value}
  </li>`

  ul.innerHTML += list

}


form.addEventListener("submit", e => {
  e.preventDefault();

  createList();
});




function del_parentNode(e) {

  let del = e.parentNode

  del.parentNode.removeChild(del)

  console.log(del);
}





