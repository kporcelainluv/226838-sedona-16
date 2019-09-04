const mainNav = document.querySelector(".page-header__main-nav");
const navToggle = document.querySelector(".page-header__toggle");
const iconClose = document.querySelector(".icon-close");
const iconOpen = document.querySelector(".icon-open");

mainNav.classList.add("page-header__closed");
navToggle.classList.remove("visually-hidden");

navToggle.addEventListener("click", e => {
  if (mainNav.classList.contains("page-header__closed")) {
    mainNav.classList.remove("page-header__closed");
    mainNav.classList.add("page-header__opened");
    iconClose.classList.remove("visually-hidden");
    iconOpen.classList.add("visually-hidden");
  } else {
    mainNav.classList.add("page-header__closed");
    mainNav.classList.remove("page-header__opened");
    iconOpen.classList.remove("visually-hidden");
    iconClose.classList.add("visually-hidden");


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
