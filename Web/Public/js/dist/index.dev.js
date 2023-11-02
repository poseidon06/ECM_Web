"use strict";

var lastScrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.classList.add("js-icon");
  } else {
    navbar.classList.remove("js-icon");
  }

  lastScrollTop = scrollTop;
});
document.getElementById("year").innerHTML = new Date().getFullYear();