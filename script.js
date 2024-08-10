let timer;
let startTime;
let elapsedTime = 0;
let isRunning = false;

const display = document.querySelector('.display');
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');


function formatTime(timeInSeconds) {
    const pad = (num) => num.toString().padStart(2,'0');
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function updateDisplay() {
    display.textContent = formatTime(elapsedTime);
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timer = setInterval(() => {
            elapsedTime = Math.floor((Date.now() - startTime) / 1000);
            updateDisplay();
        },1000);
        startBtn.textContent = 'Pause';
    } else {
        clearInterval(timer);
        isRunning = false;
        startBtn.textContent = 'Resume';
    }
}


function stopTimer() {
    clearInterval(timer);
    isRunning = false;
    startBtn.textContent = 'Start';
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    updateDisplay();
    startBtn.textContent = 'Start';
}

startBtn.addEventListener('click',startTimer);
stopBtn.addEventListener('click',stopTimer);
resetBtn.addEventListener('click',resetTimer);
