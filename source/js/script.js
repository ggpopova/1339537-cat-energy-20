// MENU
var menuNav = document.querySelector(".menu-nav");
var menuNavToggle = document.querySelector(".menu-nav__toggle");

menuNav.classList.remove("menu-nav-nojs");

menuNavToggle.addEventListener("click", function () {
  if (menuNav.classList.contains("menu-nav--closed")) {
    menuNav.classList.remove("menu-nav--closed");
    menuNav.classList.add("menu-nav--opened");
  } else {
    menuNav.classList.add("menu-nav--closed");
    menuNav.classList.remove("menu-nav--opened");
  }
});

//map

document.addEventListener("DOMContentLoaded", function () {
  var mapEl = document.querySelector("#map");

  if (mapEl) {
    ymaps.ready(init);
    var map;
    function init() {
      map = new ymaps.Map("map", {
        center: [59.938635, 30.323118],
        zoom: 14,
        controls: [],
      });
      var placemark = new ymaps.Placemark(
        [59.938635, 30.323118],
        {},
        {
          iconLayout: "default#image",
          iconImageHref: "/img/map-pin.png",
          iconImageSize: [113, 106],
        }
      );
      map.geoObjects.add(placemark);
    }
  }
});
