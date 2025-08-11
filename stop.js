const stop=document.getElementById("stop");
const start=document.getElementById("start");
const restart=document.getElementById("restart");

let days = 0, hours = 0, minutes = 0, seconds = 0;
let interval = null;
const dayDisplay = document.getElementById("Days").querySelector("p");
const hourDisplay = document.getElementById("hours").querySelector("p");
const minuteDisplay = document.getElementById("minutes").querySelector("p");
const secondDisplay = document.getElementById("seconds").querySelector("p");

function updateDisplay() {
  dayDisplay.textContent = String(days).padStart(2, '0');
  hourDisplay.textContent = String(hours).padStart(2, '0');
  minuteDisplay.textContent = String(minutes).padStart(2, '0');
  secondDisplay.textContent = String(seconds).padStart(2, '0');
}

function StartTimer(params) {
    if (interval !== null) return;

  interval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    if (hours === 24) {
      hours = 0;
      days++;
    }
    updateDisplay();
  }, 1000);
}

function StopTimer() {
  clearInterval(interval); 
  interval = null;
}

function restartTimer() {
  StopTimer();
  days = hours = minutes = seconds = 0;
  updateDisplay();
}

stop.addEventListener("click", (evt) => {
  evt.preventDefault();
  StopTimer();
});

start.addEventListener("click", (evt) => {
  evt.preventDefault();
  StartTimer();
});

restart.addEventListener("click", (evt) => {
  evt.preventDefault();
  restartTimer();
});