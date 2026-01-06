let btn = document.getElementById("toggleBtn");
let page = document.getElementById("page");

function toggleM() {
    page.classList.toggle("dark-mode");
    page.classList.toggle("light-mode");
}

btn.addEventListener("click", toggleM);