const email = document.querySelector(".input-wrapper__email-box");
const form = document.querySelector(".form");
const error = document.querySelector(".error");
const errorImg = document.querySelector(".input-wrapper__error-img");
const btn = document.querySelector(".input-wrapper__submit-btn");
let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

form.addEventListener("click", (e) => {
  if (!email.value.match(reg)) {
    email.classList.add("error-case");
    errorImg.classList.add("error-case");
    error.classList.add("error-case");
  } else {
    email.classList.remove("error-case");
    error.classList.remove("error-case");
    errorImg.classList.remove("error-case");
  }
});
form.addEventListener("keydown", function (e) {
  if (e.keyCode === 13 || e.which === 13) {
    e.preventDefault();
  }
});

email.addEventListener("input", () => {
  if (email.value) {
    email.classList.add("input-text")
  } else email.classList.remove("input-text")
});
