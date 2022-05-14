window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("scroll-ani", window.scrollY > 0);
});

// menu
var navlink = document.querySelector(".nav-link");
var count = 1;
var screenwid = window.innerWidth;
console.log(screenwid);

function Menu() {
  if (screenwid <= 700) {
    if (count == 1) {
      navlink.style.top = "0";
      count = 0;
    } else {
      navlink.style.top = "-500px";
      count = 1;
    }
  }
}
