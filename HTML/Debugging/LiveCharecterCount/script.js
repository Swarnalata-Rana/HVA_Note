let textInput = document.getElementById("textInput");
let charCount = document.getElementById("charCount")
textInput.addEventListener("input", charCountFun)

function charCountFun() {
    let countLength = textInput.value.length;
    charCount.innerText = `Characters: ${countLength} / 100`;

    if (countLength >= 100) {
        charCount.style.color = 'red'
    }
    else {
        charCount.style.color = "black"
    }
}