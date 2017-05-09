const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100; // 100px

hero.addEventListener("mousemove", showShadow);

function showShadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;
    if(this !== e.target) {
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    console.log(xWalk, yWalk);
    text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`;
}