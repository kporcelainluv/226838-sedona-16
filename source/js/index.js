const mainNav = document.querySelector(".page-header__main-nav");
const navToggle = document.querySelector(".page-header__toggle");
const navClose = document.querySelector(".page-header__close");

console.log(navToggle);
navToggle.addEventListener("click", e => {
  if (mainNav.classList.contains("page-header__closed")) {
    console.log("open");
    mainNav.classList.remove("page-header__closed");
    mainNav.classList.add("page-header__opened");
    navToggle.classList.add("visually-hidden");
  } else {
    console.log("close");
    mainNav.classList.add("page-header__closed");
    mainNav.classList.remove("page-header__opened");
  }
});
navClose.addEventListener("click", () => {
  if (!mainNav.classList.contains("page-header__closed")) {
    mainNav.classList.add("page-header__closed");
    mainNav.classList.remove("page-header__opened");
    navToggle.classList.remove("visually-hidden");
  }
});
const currentPage = window.location.href.split("/")[3];
if (window.innerWidth > 768) {
  if (currentPage === "form.html") {
    document
      .querySelector(".page-header__element--feedback a")
      .classList.add("page-header__element-link--active");
  }
  if (currentPage === "index.html") {
    document
      .querySelector(".page-header__element--main a")
      .classList.add("page-header__element-link--active");
  }
  if (currentPage === "photo.html") {
    document
      .querySelector(".page-header__element--photo a")
      .classList.add("page-header__element-link--active");
  }
}
