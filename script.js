let timer;
let elapsedTime = 0;
let isRunning = false;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function updateTime() {
    elapsedTime += 1000;
    const time = new Date(elapsedTime);
    const minutes = String(time.getUTCMinutes()).padStart(2, '0');
    const seconds = String(time.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(time.getUTCMilliseconds()).padStart(3, '0');
    display.textContent = `${minutes}:${seconds}:${milliseconds}`;
}

startStopBtn.addEventListener('click', () => {
    if (!isRunning) {
        timer = setInterval(updateTime, 1000);
        isRunning = true;
    }
});

stopBtn.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
});

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    elapsedTime = 0;
    display.textContent = '00:00:00';
    isRunning = false;
});
