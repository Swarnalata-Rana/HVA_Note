let searchBox = document.getElementById("searchBox");
let pTag = document.querySelectorAll(".pTag")

searchBox.addEventListener("input", function () {
    let text = searchBox.value.toLowerCase()

    pTag.forEach(arr => {

        let pText = arr.innerText.toLowerCase();

        if (pText.includes(text)) {
            arr.style.display = "block"
        }
        else {
            arr.style.display = "none"
        }

    })

})