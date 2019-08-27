const modalSent = document.querySelector(".modal-sent");
const modalSentButton = document.querySelector(".modal-sent__button");

const modalError = document.querySelector(".modal-error");
const modalErrorButton = document.querySelector(".modal-error__button");

modalSentButton.addEventListener("click", event => {
  modalSent.classList.add("visually-hidden");
});
modalErrorButton.addEventListener("click", event => {
  modalError.classList.add("visually-hidden");
});
