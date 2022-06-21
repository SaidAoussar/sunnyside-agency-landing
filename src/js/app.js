const navMobile = document.querySelector(".header__nav-mobile");
const iconHamburger = document.querySelector(".icon-hamburger");

//d-none, d-inline-block
iconHamburger.addEventListener("click", function () {
  if (navMobile.classList.contains("d-none")) {
    navMobile.classList.remove("d-none");
    navMobile.classList.add("d-inline-block");
  } else {
    navMobile.classList.add("d-none");
    navMobile.classList.remove("d-inline-block");
  }
});
