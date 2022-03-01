const popup = document.querySelector(".modal-wind");
const open = document.querySelector(".login-link");
const close = document.querySelector(".modal-close");

open.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show"); 
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.add("modal");
});



