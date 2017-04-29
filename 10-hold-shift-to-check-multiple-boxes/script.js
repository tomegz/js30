document.addEventListener("keydown", onShiftHold);
document.addEventListener("keyup", removeClickListener)
const checkBoxes = document.querySelectorAll('input[type="checkbox"]');

function onShiftHold(e) {
    if(e.keyCode != 16) return;
    checkBoxes.forEach((checkBox, boxIndex) => {
        checkBox.addEventListener("click", function () {
            handleClick(e, boxIndex);
        });
    });
}

function handleClick(e, boxIndex) {
    console.log("What was clicked:");
    console.dir(boxIndex);
}

function removeClickListener(e) {
    if(e.keyCode != 16) return;
    console.log("here");
    checkBoxes.forEach(checkBox => checkBox.removeEventListener("click", handleClick));
}