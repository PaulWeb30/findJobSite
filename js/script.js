const headerBurger = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__navigation');
const body = document.querySelector('body');
headerBurger.addEventListener('click', function() {
  this.classList.toggle('active');
  headerNav.classList.toggle('active');
  body.classList.toggle('lock');
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})