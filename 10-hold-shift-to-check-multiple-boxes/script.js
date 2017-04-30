const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastClickedBox;
checkBoxes.forEach(checkBox => checkBox.addEventListener("click", handleClick));

function handleClick(e) {
    let inBetween = false;
    //check if shift was held and if checkbox is being checked
    //then loop through each checkbox, flip the flag if checkbox is clicked 
    //or was clicked previously, check boxes inbetween
    if(e.shiftKey && this.checked) {
      checkBoxes.forEach(checkBox => {
         if(checkBox === this || checkBox === lastClickedBox) {
             inBetween = !inBetween;
         } 
         if(inBetween) {
             checkBox.checked = true;
         }
      });
    }
    lastClickedBox = this;
}