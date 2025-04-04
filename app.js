// const date = new Date()
// console.log(date.toString())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())

// const hours = document.getElementById('hrs')
// const minutes = document.getElementById('mis')
// const seconds = document.getElementById('sec')
// const stopped = document.getElementById('stopbutton')
// const started = document.getElementById('startbutton')
// const reset = document.getElementById('resetbutton')


// setInterval(() => {
//                     const currentDate = new Date();
//                     hours.innerText = currentDate.getHours();
//                     minutes.innerText = currentDate.getMinutes();
//                     seconds.innerText = currentDate.getSeconds();
// }, 1000)



let timer; 
let running = false;

const hours = document.getElementById("hrs");
const minutes = document.getElementById("mins");
const seconds = document.getElementById("sec");

const startButton = document.getElementById("startbutton");
const stopButton = document.getElementById("stopbutton");
const resetButton = document.getElementById("resetbutton");

function updateClock() {
    const currentDate = new Date();
    hours.innerText = currentDate.getHours().toString().padStart(2, "0");
    minutes.innerText = currentDate.getMinutes().toString().padStart(2, "0");
    seconds.innerText = currentDate.getSeconds().toString().padStart(2, "0");
}

function startClock() {
    if (!running) {
        running = true;
        timer = setInterval(updateClock, 1000);
        updateClock(); 
    }
}

function stopClock() {
    clearInterval(timer);
    running = false;
}

function resetClock() {
    clearInterval(timer);
    running = false;
    hours.innerText = "00";
    minutes.innerText = "00";
    seconds.innerText = "00";
}


startButton.addEventListener("click", startClock)
stopButton.addEventListener("click", stopClock)
resetButton.addEventListener("click", resetClock)


updateClock()
