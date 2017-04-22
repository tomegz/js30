(function(){

    const secondHand = document.querySelector(".second-hand");
    const minuteHand = document.querySelector(".minute-hand");
    const hourHand = document.querySelector(".hour-hand");
    
    setInterval(clockUpdate, 1000);
    
    function clockUpdate() {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();
        secondHand.style.transform = `rotate(${getDegrees(seconds)}deg)`;
        minuteHand.style.transform = `rotate(${getDegrees(minutes)}deg)`;
        hourHand.style.transform = `rotate(${getHourDegrees(hours)}deg)`; 
    }
    
    function getDegrees(timeUnit) {
        return ((timeUnit / 60) * 360) + 90;
    }
    
    function getHourDegrees(timeUnit) {
        return (((timeUnit - 12) / 12) * 360) + 90;
    }
    
}());