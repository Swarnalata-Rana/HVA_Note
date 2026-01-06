let circleTag = document.getElementById("circleTag");
let startBtn = document.getElementById("startBtn");
let timerTag = document.getElementById("timerTag");
let pTag = document.getElementById("pTag");

let interval = null

function countDown(seconds) {
    if (interval) {
        clearInterval(interval);
    }

    let timer = seconds;
    timerTag.innerText = `Timer: ${timer}`;

    interval = setInterval(function () {
        timer--;
        timerTag.innerText = `Timer: ${timer}`;

        if (timer === 0) {
            clearInterval(interval);
            interval = null;
        }
    }, 1000);
}


function green() {
    let promise = new Promise(function (resolve) {
        circleTag.style.backgroundColor = "green";
        countDown(6)

        setTimeout(function () {
            resolve()
        }, 6000)
    })
    return promise
}

function yellow() {
    let promise = new Promise(function (resolve) {
        circleTag.style.backgroundColor = "yellow";
        countDown(2)

        setTimeout(function () {
            resolve()
        }, 2000)
    })
    return promise
}

function red() {
    let promise = new Promise(function (resolve) {
        circleTag.style.backgroundColor = "red";
        countDown(6)

        setTimeout(function () {
            resolve()
        }, 6000)
    })
    return promise
}

async function displayAwaitMsg() {

    await green()
    await yellow()
    await red()

    pTag.innerText = "Cycle complete.";
    startBtn.disabled = false;
}

startBtn.addEventListener("click", function () {
    pTag.innerText = ""
    startBtn.disabled = true
    displayAwaitMsg()
})