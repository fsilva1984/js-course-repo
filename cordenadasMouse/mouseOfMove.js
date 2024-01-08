
const cord = document.querySelector('.cordenadas');



cord.addEventListener('mousemove', e => { 
  let x = e.offsetX;
  let y = e.offsetY;
  
  const c1 = document.querySelector('.c1');
  const c2 = document.querySelector('.c2');
  
  c1.innerHTML = x +'°';
  c2.innerHTML = y +'°';

  
});

