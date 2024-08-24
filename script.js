const minLabel = document.querySelector("#minutes");
const sLabel = document.querySelector("#seconds");
const hoursLabel = document.querySelector("#hours");

const startButton = document.querySelector(".startBtn");
const stopButton = document.querySelector(".stopBtn");
const pauseButton = document.querySelector(".pauseBtn");
const resetButton = document.querySelector(".resetBtn");

const lapList = document.querySelector("#laplist");

///var

let minutes = 0;
let seconds = 0;
let hours = 0;
let interval;

const startTimer = () => {
  interval = setInterval(updateTimer, 1000);
  startButton.disabled = true;
};
const stopTimer = () => {
  //   clearInterval(interval);
  addToLapList();
  //   resetTimerData();
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
  removeLapList();
};

const updateTimer = () => {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  displayTimer();
};
const displayTimer = () => {
  minLabel.textContent = padTimer(minutes);
  sLabel.textContent = padTimer(seconds);
  hoursLabel.textContent = padTimer(hours);
};

const padTimer = (time) => {
  return time.toString().padStart(2, "0");
};
const resetTimerData = () => {
  minutes = 0;
  seconds = 0;
  hours = 0;
  displayTimer();
};

const addToLapList = () => {
  const lapTime = `${padTimer(hours)}:${padTimer(minutes)}:${padTimer(
    seconds
  )}`;
  const listItem = document.createElement("li");
  listItem.innerHTML = `<span>Lap ${
    lapList.childElementCount + 1
  }: </span>${lapTime}`;
  lapList.appendChild(listItem);
};
const removeLapList = () => {
  lapList.innerHTML = "";
};
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
