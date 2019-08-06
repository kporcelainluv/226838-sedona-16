const mainNav = document.querySelector(".page-header__main-nav");
const navToggle = document.querySelector(".page-header__toggle");
console.log(navToggle);
navToggle.addEventListener("click", e => {
  console.log(e.target);
  if (mainNav.classList.contains("page-header__closed")) {
    console.log(mainNav.classList.contains("page-header__closed"));
    mainNav.classList.remove("page-header__closed");
    mainNav.classList.add("page-header__opened");
    console.log(mainNav);
  } else {
    mainNav.classList.add("page-header__closed");
    mainNav.classList.remove("page-header__opened");
  }
});
