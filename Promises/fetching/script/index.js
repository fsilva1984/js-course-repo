

/*

NOTA: se quiser parar uma aplicacao , o return tem que ser no else 

a logica precisa ser assim: 

if ( TRUE ) { 
  **FACA ISSO
 
} else { 

  ** RETURN
}

*/



const form = document.querySelector("#form")

const name = document.querySelector("#inp-1")
const email = document.querySelector("#inp-2")
const passwd = document.querySelector("#inp-3")
const tel = document.querySelector("#inp-4")
const zip = document.querySelector("#inp-5")
const num = document.querySelector("#inp-6")
const ref = document.querySelector("#inp-7")


function setAdress(param) {
  console.log('');
}


function fetching(param) {


  const url = `https://viacep.com.br/ws/${param}/json/`

  fetch(url).then(res => {
    console.log(res.json());

  })
    .catch(erro => {
      console.log(erro);
    })

}

form.addEventListener("submit", evn => {
  evn.preventDefault()
  // field is empaty
  const fieldIsEmpaty = (params) => {

    params.map(el => {

      if (el.value == '') {
        //el.style.borderColor = 'green'
        el.style.borderColor = 'red'

      } else {
        return
      }

      
    })
    fetching(zip.value)

  }


  fieldIsEmpaty([name, email, passwd, tel, zip, num])
})




