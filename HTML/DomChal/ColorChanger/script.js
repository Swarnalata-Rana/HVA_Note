let box = document.getElementById("box");

let redBtn = document.getElementById("redBtn");
let yellowBtn = document.getElementById("yellowBtn");
let blueBtn = document.getElementById("blueBtn");
let greenBtn = document.getElementById("greenBtn");


redBtn.addEventListener("click", function () {
    box.style.backgroundColor = "red";
})

yellowBtn.addEventListener("click", function () {
    box.style.backgroundColor = "yellow";
})

blueBtn.addEventListener("click", function () {
    box.style.backgroundColor = "blue";
})

greenBtn.addEventListener("click", function () {
    box.style.backgroundColor = "green";
})