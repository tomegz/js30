//grab canvas and set it to max size, get context
const canvas = document.querySelector("#draw");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const ctx = canvas.getContext("2d");
//few starting vars
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 20;
let [lastX, lastY, hue] = [0, 0, 0];
let [isDrawing, direction] = [false, true];

//draw while moving mouse on canvas, turn on isDrawing flag when mouse is pressed
//turn off drawing when mouse is up or out
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);

function draw(e) {
    if(!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if(hue >= 360) hue=0;
    changeMarkerSize();
}

function changeMarkerSize() {
    if(ctx.lineWidth >= 100 || ctx.lineWidth < 20) {
      direction = !direction;
    }
    if(direction){
      ctx.lineWidth++;
    } else {
      ctx.lineWidth--;
    }
}