let boxes = document.querySelectorAll(".box");
let scoreBoard = document.getElementById("scoreBorad");
let countDown = document.getElementById("countDown");

let score = 0;
let time = 30;
let activeBox = null;

scoreBoard.innerText = "Score: " + score;
countDown.innerText = "Count Down: " + time;

let boxTimer = setInterval(function () {
    if (activeBox) {
        activeBox.classList.remove("active");
    }

    let random = Math.floor(Math.random() * boxes.length);
    activeBox = boxes[random];
    activeBox.classList.add("active");

    setTimeout(function () {
        if (activeBox) {
            activeBox.classList.remove("active");
            activeBox = null;
        }
    }, 1000);

}, 2000);

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {
        if (boxes[i] === activeBox) {
            score++;
            scoreBoard.innerText = "Score: " + score;

            activeBox.classList.remove("active");
            activeBox = null;
        }
    });
}

let gameTimer = setInterval(function () {
    time--;
    countDown.innerText = "Count Down: " + time;

    if (time === 0) {
        clearInterval(boxTimer);
        clearInterval(gameTimer);

        for (let i = 0; i < boxes.length; i++) {
            boxes[i].classList.remove("active");
        }

        activeBox = null;
    }
}, 1000);
