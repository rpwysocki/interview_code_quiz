
// Get the timer element from the DOM
var timerElement = document.getElementById("timer");
var timerInterval;

// Set the timer duration (in seconds)
var duration = 60;
var button = document.getElementById("button");

// Function to format the time
function formatTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    return minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
}

// Function to update the timer
function updateTimer() {
    duration--;
    timerElement.textContent = formatTime(duration);

    if (duration <= 0) {
        clearInterval(timerInterval);
        alert("Time's up!");
    }
}

// Update the timer immediately
// updateTimer();

// Start the timer interval (updates every second)
// var timerInterval = setInterval(updateTimer, 1000);



// var button = document.querySelector('.btn')

button.addEventListener('click', function () {
    if (!timerInterval) {
        timerInterval = setInterval(updateTimer, 1000);
    }
});













// function beginQuiz(event) {
//     var btnOne = event.target;

//     console.log(click)
// }




// function startTimer() {
//     timer = setInterval(function () {
//         time--;
//         timer.innerText = `Time:` + time;

//         if (time <= 0) {
//             clearInterval(timer);
//             timerElement.textContent = "Countdown Finished!"
//         }
//     }, 1000);
// }
// startTimer();



