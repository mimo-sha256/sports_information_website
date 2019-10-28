var carouselIndicator = document.querySelectorAll(".ci");
var carouselItem = document.querySelectorAll(".carousel-item");
var prevButton = document.querySelector(".carousel-control-prev");
var nextButton = document.querySelector(".carousel-control-next");

var ci = 99;

prevButton.addEventListener("click",function () {
    carouselIndicator[ci%3].classList.remove("active");
    carouselItem[ci%3].classList.remove("active");
    if(ci==0) ci=98;
    else ci = ci-1;
    carouselIndicator[ci%3].classList.add("active");
    carouselItem[ci%3].classList.add("active");
});

nextButton.addEventListener("click",function () {
    carouselIndicator[ci%3].classList.remove("active");
    carouselItem[ci%3].classList.remove("active");
    if(ci==0) ci=100;
    else ci = ci+1;
    carouselIndicator[ci%3].classList.add("active");
    carouselItem[ci%3].classList.add("active");
});