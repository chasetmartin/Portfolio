function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

document.addEventListener("click", function(event){
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false )

var slideIndex = 1;
showSlides(slideIndex);

function stop(){
	clearInterval(interval);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
    //Stop auto slideshow
    stop();
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    //Stop auto slideshow
    stop();
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex -1].className += " active";
}
//Slideshow interval: stopping the slideshow on click of image
var interval=setInterval(function(){slideIndex+=1; showSlides(slideIndex);}, 4000);
var slides = document.getElementsByClassName("mySlides");
for (var i = 0; i < slides.length; i++) {
    slides[i].onclick = stop;
}
