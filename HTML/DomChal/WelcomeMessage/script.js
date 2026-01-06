let greet = document.getElementById("p");
let btn = document.getElementById("btn");

function greeting() {
    greet.innerText = "Welcome back!";

}

btn.addEventListener("click", greeting)