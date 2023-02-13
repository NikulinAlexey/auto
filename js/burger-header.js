const btnBurger = document.querySelector('.header__burger');
const menuHeader = document.querySelector('.header__link-list');
const body = document.querySelector('.body');

btnBurger.addEventListener('click', function() {
  btnBurger.classList.toggle('active');
  menuHeader.classList.toggle('active');
  body.classList.toggle('lock');
})