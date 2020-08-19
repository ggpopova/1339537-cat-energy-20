// MENU
var menuNav = document.querySelector('.menu-nav');
  var menuNavToggle = document.querySelector('.menu-nav__toggle');

  menuNav.classList.remove('menu-nav-nojs');

  menuNavToggle.addEventListener('click', function() {
    if (menuNav.classList.contains('menu-nav--closed')) {
      menuNav.classList.remove('menu-nav--closed');
      menuNav.classList.add('menu-nav--opened');
    } else {
      menuNav.classList.add('menu-nav--closed');
      menuNav.classList.remove('menu-nav--opened');
    }
  });
