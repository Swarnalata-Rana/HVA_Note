
let countTag = document.getElementById("countTag")
let startBtn = document.getElementById("startBtn")
let pauseBtn = document.getElementById("pauseBtn")
let resetBtn = document.getElementById("resetBtn")

let intervalId;
let count = 0
let isPause = true;

pauseBtn.disabled = true

startBtn.addEventListener("click", function () {

    if (intervalId) return;
    intervalId = setInterval(function () {
        countTag.innerText = `Counter Starting: ${count}`
        count++
    }, 1000)

    startBtn.disabled = true
    pauseBtn.disabled = false
})

pauseBtn.addEventListener("click", function () {
    if (isPause) {
        clearInterval(intervalId)
        intervalId = null
        pauseBtn.innerText = "Resume"
        isPause = false
    }
    else {
        intervalId = setInterval(function () {
            countTag.innerText = `Counter Starting: ${count}`
            count++
        }, 1000)
        pauseBtn.innerText = "Pause"
        isPause = true
    }
})

resetBtn.addEventListener("click", function () {
    clearInterval(intervalId)
    intervalId = null
    count = 0
    countTag.innerText = `Counter Starting: ${count}`
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    pauseBtn.innerText = "Pause"
    isPause = true
})