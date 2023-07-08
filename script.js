// bars
const menuExit = document.querySelector("#xIcon");
const menuHamburger = document.querySelector("#menuHamburger");
const navsLinks = document.querySelector(".navsLinks");
const navLinks = document.querySelector('.navLinks')
menuHamburger.addEventListener('click', () => {
  navsLinks.classList.toggle('mobile-menu');
});
menuExit.addEventListener('click', () => {
  navsLinks.classList.toggle('mobile-menu');  
});
