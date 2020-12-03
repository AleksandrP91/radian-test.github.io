const menuBurger = function () {
  const menu = document.querySelector('.menu__burger');
  const menuActive = document.querySelector('.burger');
  const menuPopup = document.querySelector('.menu__popup');

  menu.addEventListener('click', function () {
    menu.classList.toggle('active');
  });

  menu.addEventListener('click', function () {
    menuActive.classList.toggle('active');
  });

  menu.addEventListener('click', function () {
    menuPopup.classList.toggle('active');
  });
};

export default menuBurger;
