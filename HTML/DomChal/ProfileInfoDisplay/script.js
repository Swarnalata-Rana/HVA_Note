let para = document.getElementById("p");
let btn = document.getElementById("btn");

function showInfo() {
    para.style.display = "block";
}

btn.addEventListener("click", showInfo);