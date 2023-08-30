import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
const selectors = {
    startBtn: document.querySelector("[data-start]"),
    daysValue: document.querySelector("[data-days]"),
    hoursValue: document.querySelector("[data-hours]"),
    minutesValue: document.querySelector("[data-minutes]"),
    secondsValue: document.querySelector("[data-seconds]"),
}
selectors.startBtn.disabled = true
let endTime
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] - new Date <= 0) {
            // alert("Please choose a date in the future")
            Notiflix.Notify.failure('Please choose a date in the future');
        } else {
            selectors.startBtn.disabled = false;
            endTime = selectedDates[0].getTime()
            // setInterval(() => {
            //     const timeDiference = selectedDates[0] - new Date;
            //     const {days,hours,minutes,seconds} = convertMs(timeDiference)
            //     selectors.daysValue.textContent = days;
            //     selectors.hoursValue.textContent = hours;
            //     selectors.minutesValue.textContent = minutes;
            //     selectors.secondsValue.textContent = seconds
            // }, 1000)
        }
    },
};
flatpickr("#datetime-picker", options);

selectors.startBtn.addEventListener("click", hendlerStart);


function hendlerStart() {
    selectors.startBtn.disabled = true
     const timerId = setInterval(() => {
            const timeDiference = endTime - new Date;
            const {days,hours,minutes,seconds} = convertMs(timeDiference)
            selectors.daysValue.textContent = addLeadingZero(days);
            selectors.hoursValue.textContent = addLeadingZero(hours);
            selectors.minutesValue.textContent = addLeadingZero(minutes);
         selectors.secondsValue.textContent = addLeadingZero(seconds)
     }, 1000)
    setTimeout(() => {
        Notiflix.Notify.success('The coutdown is over');
        clearInterval(timerId)
    }, endTime - new Date)
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value){
   return value.toString().padStart(2, "0")
}
