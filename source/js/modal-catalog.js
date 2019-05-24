var overlay = document.querySelector(".overlay");
var submit = document.querySelector(".modal-form__submit");
var orderCatalog = document.querySelector(".catalog__order");

orderCatalog.addEventListener("click", function(evt) {
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
