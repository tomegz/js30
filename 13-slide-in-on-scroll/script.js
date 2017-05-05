const sliderImages = document.querySelectorAll(".slide-in");

document.addEventListener("scroll", debounce(checkSlide));

function checkSlide(e) {
    sliderImages.forEach(sliderImage => {
        //this is being recalculated every time, in case anything was changed on the page
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2; // half of image
        const imageBottom = sliderImage.offsetTop + sliderImage.height; // bottom of image
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if(isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add("active");
        } else {
            sliderImage.classList.remove("active");
        }
    })
}

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}