const btn = document.querySelector('.btn');

const close = document.querySelector('.close');

const popupContainer = document.querySelector('.popup-container'); 

btn.addEventListener('click', () => {
  popupContainer.style.display = 'block';
})
close.addEventListener('click', () => {
  popupContainer.style.display = 'none';
});




