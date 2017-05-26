const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mousemove", (e) => {
    if(!isDown) return;
    e.preventDefault(); //interrupt text selecting etc.
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
});
slider.addEventListener("mouseup",    cancelSlide);
slider.addEventListener("mouseleave", cancelSlide);

function cancelSlide() {
    isDown = false;
    slider.classList.remove("active");
}