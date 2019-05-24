var order = document.querySelector(".special-offer__order");
var overlay = document.querySelector(".overlay");
var submit = document.querySelector(".modal-form__submit");

order.addEventListener("click", function(evt) {
  evt.preventDefault();
  overlay.classList.remove("overlay--close");
  overlay.classList.add("overlay--show");
});

submit.addEventListener("click", function(evt) {
  evt.preventDefault();
  overlay.classList.remove("overlay--show");
  overlay.classList.add("overlay--close");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (overlay.classList.contains("overlay--show")) {
      overlay.classList.remove("overlay--show");
      overlay.classList.add("overlay--close");
    }
  }
});
