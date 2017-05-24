const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

triggers.forEach(trigger => trigger.addEventListener("mouseenter", handleEnter));
triggers.forEach(trigger => trigger.addEventListener("mouseleave", handleLeave));

function handleEnter() {
    this.classList.add("trigger-enter");
    setTimeout(() => this.classList.add("trigger-enter-active"), 150);
}

function hadnleLeave() {
    
}