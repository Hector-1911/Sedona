var link = document.querySelector(".popup-button");
var popup = document.querySelector(".search-modal");


link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
});


var adulsCounter = document.querySelector(".aduls-counter");
var kidsCounter = document.querySelector(".kids-counter");
var adulsMinus = document.querySelector(".aduls-minus-btn");
var adulsPlus = document.querySelector(".aduls-plus-btn");
var kidsMinus = document.querySelector(".kids-minus-btn");
var kidsPlus = document.querySelector(".kids-plus-btn");


adulsMinus.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (adulsCounter.value > 0) {
       adulsCounter.value = adulsCounter.value - 1;
    }
});
adulsPlus.addEventListener("click", function(evt) {
    evt.preventDefault();
    adulsCounter.value = (adulsCounter.value - 1) + 2;
});

kidsMinus.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (kidsCounter.value > 0) {
       kidsCounter.value = kidsCounter.value - 1;
    }
});

kidsPlus.addEventListener("click", function(evt) {
    evt.preventDefault();
    kidsCounter.value = (kidsCounter.value - 1) + 2;
});
