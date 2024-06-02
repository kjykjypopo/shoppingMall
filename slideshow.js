let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls (다음/이전 컨트롤)
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls (썸네일 이미지 컨트롤)
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
     
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

    setTimeout(showSlides, 4000); // Change image every 4 seconds
  }
