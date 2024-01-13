

const form = document.querySelector('form');
const msg = document.querySelector('.box-p');
const input = document.querySelector('#input');
const btn = document.querySelector('#btn');


const pattern = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}/);

input.addEventListener('keyup', e => { 
  const boolean = pattern.test(input.value);

  if (!boolean) {
    form.style.border = '1px solid rgb(255, 124 , 124)';
  
  } else {
    form.style.border = '1px solid rgb(85, 221, 85)';
    msg.style.display = 'none';
  }
});

btn.addEventListener('click', e => {
  e.preventDefault();
  const boolean = pattern.test(input.value);

  if (boolean) {
    console.log(input.value);
    input.value = '';
    msg.style.display = 'none';
    return

  } else { 
    msg.style.display = 'block';
  }
});



/*
white 206, 203, 203
red 255, 124 , 124
green 85, 221, 85 
*/

