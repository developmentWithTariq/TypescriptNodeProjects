// Set the date we're counting down to
let countDownDate = new Date("Sep 15, 2023 23:07:20").getTime();
// Update the count down every 1 second
const CountDownTimer = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const displayCountDown = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    console.clear();
    console.log(displayCountDown);
    if (distance < 0) {
        clearInterval(CountDownTimer);
    }
}, 1000);
CountDownTimer;
export {};
