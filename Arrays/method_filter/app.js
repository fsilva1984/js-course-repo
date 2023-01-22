


const log = console.log;

const users = [
  
  {user: "Rubens" ,id: 358, premium: false},
  {user: "Dan" ,id: 362, premium: false},
  {user: "Beijamin" ,id: 344, premium: false},
  {user: "Jose" ,id: 315, premium: false},
  {user: "Neftali" ,id: 346, premium: false},
  {user: "Siquem" ,id: 323, premium: false},
  
]

log("Array original",users)


let newUsers = users

let cp = newUsers.map(item => {

  if (item.id %2 == 0) {
    item.premium = true
    return { user: item.user ,id: item.id, premium: item.premium }
  }
  
})

log("Novo array",cp)




const list = document.querySelectorAll(".list")
const exit = document.querySelector(".c-exit")

list.filter(item => {
  exit.innerHTML = item
})
























