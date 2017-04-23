(function() {
    //play sound every time key is down
    window.addEventListener("keydown", playSound);
    //remove transition every time it ends on any key
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener("transitionend", removeTransition))

    function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //ES6 template string
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if(!audio) return; //only if audio exists
        audio.currentTime = 0; //rewind before each play
        audio.play();
        key.classList.toggle('playing'); // changed add for toggle due to transition not removing when hitting keys real fast
    }  

    function removeTransition(e) {
        if(e.propertyName !== "transform") return; //because event has about 6 different transitionend events..
        this.classList.remove('playing');
    }
    
}());