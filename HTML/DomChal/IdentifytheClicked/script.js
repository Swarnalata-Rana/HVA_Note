let btn = document.getElementsByClassName("btn")

function clickBtn(event) {
    let para = event.target.parentNode.querySelector('p')
    para.innerText = "This button is clicked!"
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", clickBtn)
}