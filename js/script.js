var slide_index = 1;

// Call showSlides function (line 18)
showSlides(slide_index);

// Next/previous controls
function plusSlides(n){
    showSlides(slide_index += n);
}

// Thumbnail image controls(dots)
function currentSlide(n){
    showSlides(slide_index = n);
}


// response for changing the slides
function showSlides(n){
    var slides = document.getElementsByClassName("fade");
    var dots = document.getElementsByClassName("dot");
    var i;

    //if in the last slide, go back to the first slide
    if(n > slides.length){
        slide_index = 1;
    }


    if(n < 1){
        slide_index = slides.length;
    }

    //hide all the slides
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    //hide all selected dots
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slide_index-1].style.display = "block";
    dots[slide_index-1].className += " active";

}