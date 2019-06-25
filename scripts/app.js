var slideIndex = 0


function plusSlides(index) {
    slideShow(slideIndex += index)
}

function currentSlide(index) {
    slideShow(slideIndex = index)
}

function slideShow(index) {
    var slide = document.getElementsByClassName("image")

    slideIndex = Math.abs(index) % 4
    // for(let i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "None";
    // }
    slide[0].style = `background-image: url(./images/hero-image-${slideIndex}.jpg)`

}