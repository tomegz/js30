const panels = document.querySelectorAll(".panel");
panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleOpenActive));

function toggleOpen() {
    this.classList.toggle("open");
}
function toggleOpenActive(e) {
    if(e.propertyName.includes("flex")){ //due to many transitionend events
        this.classList.toggle("open-active");  
    }
}