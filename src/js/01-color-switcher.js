const selectors = {
    startBtn: document.querySelector("[data-start]"),
    stopBtn: document.querySelector("[data-stop]"),
    bg: document.querySelector("body")
}
selectors.startBtn.addEventListener("click",handlerStart)
selectors.stopBtn.addEventListener("click",handlerStop)

function handlerStart() {
    intervalId = setInterval(() => {
        selectors.bg.style.backgroundColor = `${getRandomHexColor()}`
    }, 1000);
    selectors.startBtn.disabled = true
}
function handlerStop() {
    clearInterval(intervalId)
    selectors.startBtn.disabled = false
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
