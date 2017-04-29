document.addEventListener("keydown", onShiftHold);
document.addEventListener("keyup", removeClickListener)
const checkBoxes = document.querySelectorAll('input[type="checkbox"]');

function onShiftHold(e) {
    if(e.keyCode != 16) return;
    checkBoxes.forEach((checkBox, boxIndex) => checkBox.addEventListener("click", handleClick));
}

function handleClick(e) {
    console.log("What was clicked:");
    console.dir(this);
}

function removeClickListener(e) {
    if(e.keyCode != 16) return;
    console.log("here");
    checkBoxes.forEach(checkBox => checkBox.removeEventListener("click", handleClick));
}