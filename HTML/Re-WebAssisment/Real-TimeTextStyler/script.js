let textInput = document.getElementById("textInput")
let displayText = document.getElementById("displayText")
let textColorBtn = document.getElementById("textColorBtn")
let bgColorBtn = document.getElementById("bgColorBtn")
let bigTextBtn = document.getElementById("bigTextBtn")

textInput.addEventListener("input", function () {
    let text = textInput.value
    displayText.innerText = text
})

textColorBtn.addEventListener("click", function () {
    if (displayText.style.color === 'blue') {
        displayText.style.color = "black"
    }
    else {
        displayText.style.color = "blue"
    }
})

bgColorBtn.addEventListener("click", function () {
    if (displayText.style.backgroundColor === "yellow") {
        displayText.style.backgroundColor = ""
    }
    else {
        displayText.style.backgroundColor = "yellow"
    }
})

bigTextBtn.addEventListener("click", function () {
    if (displayText.style.fontSize === "24px") {
        displayText.style.fontSize = "16px"
    }
    else {
        displayText.style.fontSize = "24px"
    }
})