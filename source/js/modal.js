var order = document.querySelector(".special-offer__order");
var overlay = document.querySelector(".overlay");
var submit = document.querySelector(".modal-form__submit");

order.addEventListener("click", function(evt) {
  evt.preventDefault();
  overlay.classList.remove("overlay--close");
  overlay.classList.add("overlay--show");
});

var closeModal = function (evt) {
  console.log(evt);
  if (evt.target.offsetParent === null) {
    overlay.classList.remove("overlay--show");
    overlay.classList.add("overlay--close");
  }
};

overlay.addEventListener('click', closeModal);

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    closeModal(evt);
  }
});
