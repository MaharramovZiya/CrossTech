const dropdowns = document.querySelectorAll('.dropdown_lang');

dropdowns.forEach(dropdown => {

  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const selected = dropdown.querySelector('.selected');
  select.addEventListener('click', () => {
    caret.classList.toggle('caret-rotate')
    menu.classList.toggle('menu-open');
    menu.classList.toggle('zIndex')
  });

  options.forEach(option => {
    option.addEventListener('click', () => {

      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
      menu.classList.remove('zIndex')
      selected.innerText = option.innerText

    });

  });
});

// bars
const menuExit = document.querySelector("#xIcon");
const menuHamburger = document.querySelector("#menuHamburger");
const navsLinks = document.querySelector(".navsLinks");
const langDropDown = document.getElementById('langDropDown')
const navLinks = document.querySelector('.navLinks')


menuHamburger.addEventListener('click', () => {
  navsLinks.classList.toggle('mobile-menu');


});
menuExit.addEventListener('click', () => {
  navsLinks.classList.toggle('mobile-menu');  

});



