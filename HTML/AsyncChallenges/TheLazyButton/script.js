let btn = document.getElementById("btn")
btn.addEventListener("click", function () {
    btn.innerText = "Processing..."
    btn.disabled = true

    setTimeout(function () {
        btn.innerText = "Done!"

        setTimeout(function () {
            btn.innerText = "Click Me!"
            btn.disabled = false

        }, 1000)
    }, 2000)

})