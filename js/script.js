var time = 60;
var timerElement = document.getElementById('time');
var startBtn = document.querySelector('.btn')

startBtn.addEventListener('click', begin);

function beginQuiz(event) {
    var btnOne = event.target;

    console.log(click)
}




function startTimer() {
    timer = setInterval(function () {
        time--;
        timer.innerText = `Time:` + time;

        if (time <= 0) {
            clearInterval(timer);
            timerElement.textContent = "Countdown Finished!"
        }
    }, 1000);
}
startTimer();



