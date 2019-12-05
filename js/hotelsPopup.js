var link = document.querySelector(".popup-button");
var popup = document.querySelector(".search-modal");


link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
});
