const speed = document.querySelector(".speed");
const bar = document.querySelector(".speed-bar");
const video = document.querySelector(".flex");

speed.addEventListener("mousemove", handleMove);

function handleMove(e) {
    const y = e.pageY - this.offsetTop;
    const percent = (y / this.offsetHeight);
    const [min, max] = [0.5, 4.01];
    const height = Math.round(percent * 100) + "%";
    const playbackRate = (percent * (max-min) + min).toFixed(2);
    bar.style.height = height;
    bar.textContent = playbackRate + " ×";
    video.playbackRate = playbackRate;
}