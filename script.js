const minLabel = document.querySelector("#minutes");
const msLabel = document.querySelector("#milliseconds");
const secLabel = document.querySelector("#seconds");

const startButton = document.querySelector(".startBtn");
const stopButton = document.querySelector(".stopBtn");
const pauseButton = document.querySelector(".pauseBtn");
const resetButton = document.querySelector(".resetBtn");

const lapList = document.querySelector("#laplist");

///var

let minutes = 0;
let seconds = 0;
let mSeconds = 0;
let interval;

const startTimer = () => {
  interval = setInterval(updateTimer, 10);
  startButton.disabled = true;
};
const stopTimer = () => {
  clearInterval(interval);
  addToLapList();
  resetTimerData();
  startButton.disabled = false;
};
const pauseTimer = () => {
  clearInterval(interval);
  startButton.disabled = false;
};
const resetTimer = () => {
  clearInterval(interval);
  resetTimerData();
  startButton.disabled = false;
};

const updateTimer = () => {
  mSeconds++;
  if (mSeconds === 1000) {
    mSeconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }
  displayTimer();
};
const displayTimer = () => {
  msLabel.textContent = padTimer(mSeconds);
  secLabel.textContent = padTimer(seconds);
  minLabel.textContent = padTimer(minutes);
};

const padTimer = (time) => {
  return time.toString().padStart(2, "0");
};
const resetTimerData = () => {
  minutes = 0;
  seconds = 0;
  mSeconds = 0;
  displayTimer();
};

const addToLapList = () => {
  const lapTime = `${padTimer(minutes)}:${padTimer(seconds)}:${padTimer(
    mSeconds
  )}`;
  const listItem = document.createElement("li");
  listItem.innerHTML = `<span>Lap ${
    lapList.childElementCount + 1
  }:</span>${lapTime}`;
  lapList.appendChild(listItem);
};

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
