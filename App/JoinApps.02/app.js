
/*
    SENHA FORTE

/^
  (?=.*\d)              // deve conter ao menos um dígito
  (?=.*[a-z])           // deve conter ao menos uma letra minúscula
  (?=.*[A-Z])           // deve conter ao menos uma letra maiúscula
  (?=.*[$*&@#])         // deve conter ao menos um caractere especial
  [0-9a-zA-Z$*&@#]{8,}  // deve conter ao menos 8 dos caracteres mencionados
$/

(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}

*/


const btn = document.querySelector('.bt');
const senha = document.querySelector('#senha');
const repet = document.querySelector('#repet');
const erroSenha = document.querySelector('#erroSenha');
const erroConfirm = document.querySelector('#erroConfirm');


  erroSenha.firstChild.textContent = `
  Error, senha de conter minimo 8 caracteres
  deve conter letras Maiusculas
  e Menusculas
  deve conter numeros
  e simbulos $#@*&
  `
  erroConfirm.firstChild.textContent = `
    Senhas nao estao iguais!
  `

btn.addEventListener('click', e => {
  e.preventDefault();
  

  if (senha.value == "") {
    senha.classList.add('border-danger');
  } else { 
    senha.classList.remove('border-danger');
  }
  if (repet.value == "") {
    repet.classList.add('border-danger');
  } else {
    repet.classList.remove('border-danger');
  }
  
  const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
  const aBoolean = pattern.test(senha.value)

 
  if (aBoolean) {
    senha.classList.add('border-success');
    erroSenha.style.display = 'none'
    //alert('senha cadastrada com sucesso');

  } else {
    senha.classList.add('border-danger');
    erroSenha.style.display = 'block'
    //alert('reveja a senha')
   
  }
  if (repet.value !== senha.value) {
    repet.classList.add('border-danger');
    erroConfirm.style.display = 'block'
  } else {
    repet.classList.add('border-success');
    erroConfirm.style.display = 'none'
  }

})











