const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value; 

speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoice);
speakButton.addEventListener("click", setVoice);
stopButton.addEventListener("click", () => toggle(false));
options.forEach(option => option.addEventListener("change", setOption));

function populateVoices() {
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices.map(voice => {
        return `<option value="${voice.name}">${voice.name} ${voice.lang}</option>`;
    }).join("");
    msg.voice = voices[0];
}

function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
}

function setOption() {
    msg[this.name] = this.value;
    toggle();
}

function toggle(startOver = true) {
    speechSynthesis.cancel();
    if(startOver) {
        speechSynthesis.speak(msg);
    }
}