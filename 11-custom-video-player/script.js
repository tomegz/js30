/* Get elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreenButton = player.querySelector('.full_screen_button');
let mousedown = false;
// Listeners

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
toggle.addEventListener("click", togglePlay);
skipButtons.forEach(button => button.addEventListener("click", skip));
ranges.forEach(range => range.addEventListener("input", handleRangeUpdate));
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);
fullScreenButton.addEventListener("click", goFullScreen);

//Functions

function togglePlay() {
    video.paused ? video.play() : video.pause();
    updateButton();
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function updateFullScreenButton() {
    const icon = fullScreenButton.textContent === "[ ]" ? "--" : "[ ]";
    fullScreenButton.textContent = icon;
}
function skip() {
    const timeToSkip = parseFloat(this.dataset.skip);
    console.log(timeToSkip);
    video.currentTime += timeToSkip;
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    video.currentTime = video.duration * (e.offsetX / progress.offsetWidth);
}

function goFullScreen() {
    player.webkitRequestFullscreen();
}