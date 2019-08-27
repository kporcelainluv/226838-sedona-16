const submitFormBtn = document.querySelector(".form-feedback__submit-btn");
const modalSubmitted = document.querySelector(".modal-sent");
const formInput = document.querySelector(".form-feedback__input--contact");
const modalErrored = document.querySelector(".modal-error");

submitFormBtn.addEventListener("click", e => {
  e.preventDefault();
  if (formInput.value.length > 0) {
    modalSubmitted.classList.remove("visually-hidden");
  } else {
    modalErrored.classList.remove("visually-hidden");
  }
});
