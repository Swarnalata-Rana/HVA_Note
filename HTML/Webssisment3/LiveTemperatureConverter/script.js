let celsius = document.getElementById("celsius")
let fahrenheit = document.getElementById("fahrenheit")
let errorMsg = document.getElementById("errorMsg")


celsius.addEventListener("input", function () {
    let textC = celsius.value
    if (isNaN(textC)) {
        errorMsg.innerText = "invilid num";
        fahrenheit.value = ""
    }
    else {
        errorMsg.value = ""
        let fahValue = fahrenheit.value
        fahValue = (textC * 9 / 5) + 32
    }
})


fahrenheit.addEventListener("input", function () {
    let textF = fahrenheit.value
    if (isNaN(textF)) {
        errorMsg.innerText = "invilid num";
        celsius.innerText = ""
    }
    else {
        errorMsg.innerText = ""
        let celValue = celsius.value
        celValue = (textF - 32) * 5 / 9

    }
})

