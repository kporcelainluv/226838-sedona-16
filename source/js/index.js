const mainNav = document.querySelector(".page-header__main-nav");
const navToggle = document.querySelector(".page-header__toggle");
const navClose = document.querySelector(".page-header__close");
console.log("wow");

navToggle.addEventListener("click", e => {
  console.log("hello");
  if (mainNav.classList.contains("page-header__closed")) {
    mainNav.classList.remove("page-header__closed");
    mainNav.classList.add("page-header__opened");
  } else {
    mainNav.classList.add("page-header__closed");
    mainNav.classList.remove("page-header__opened");
  }
});
navClose.addEventListener("click", () => {
  if (!mainNav.classList.contains("page-header__closed")) {
    mainNav.classList.add("page-header__closed");
    mainNav.classList.remove("page-header__opened");
  }
});
