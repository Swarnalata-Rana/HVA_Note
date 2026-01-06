let circleTag = document.getElementById("circleTag");
let startBtn = document.getElementById("startBtn");
let timerTag = document.getElementById("timerTag");
let pTag = document.getElementById("pTag");

let interval = null;

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

function greenLight() {
    return new Promise(function (resolve) {
        circleTag.style.backgroundColor = "green";
        countDown(6);

        setTimeout(function () {
            resolve();
        }, 6000);
    });
}

function yellowLight() {
    return new Promise(function (resolve) {
        circleTag.style.backgroundColor = "yellow";
        countDown(2);

        setTimeout(function () {
            resolve();
        }, 2000);
    });
}

function redLight() {
    return new Promise(function (resolve) {
        circleTag.style.backgroundColor = "red";
        countDown(6);

        setTimeout(function () {
            resolve();
        }, 6000);
    });
}

startBtn.addEventListener("click", function () {
    pTag.innerText = "";
    startBtn.disabled = true;

    greenLight()
        .then(function () {
            return yellowLight();
        })
        .then(function () {
            return redLight();
        })
        .then(function () {
            pTag.innerText = "Cycle complete.";
            startBtn.disabled = false;
        });
});
