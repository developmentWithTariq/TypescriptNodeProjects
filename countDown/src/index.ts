
// Set the date we're counting down to
let countDownDate:number = new Date("Sep 15, 2023 23:07:20").getTime();

// Update the count down every 1 second
const CountDownTimer:NodeJS.Timer = setInterval(function():void {

    let now:number = new Date().getTime();

    let distance: number = countDownDate - now;

    let days: number = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours: number = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes: number = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds: number = Math.floor((distance % (1000 * 60)) / 1000);

    const displayCountDown:string = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    console.clear()
    console.log(displayCountDown)

    if (distance < 0) {
        clearInterval(CountDownTimer);
    }
}, 1000);


CountDownTimer