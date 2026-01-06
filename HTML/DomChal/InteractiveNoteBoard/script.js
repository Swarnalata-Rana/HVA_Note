let inputTag = document.getElementById("input-tag");
let btnTag = document.getElementById("btn-tag");
let containerTag = document.getElementById("container-tag");

function inputBox() {
    let text = inputTag.value.trim();

    if (text !== "") {
        let createPTag = document.createElement("p")
        createPTag.innerText = text;
        containerTag.appendChild(createPTag)
        inputTag.value = ""

        function removePtag() {
            containerTag.removeChild(createPTag)
        }
        createPTag.addEventListener("click", removePtag)

    }
}

btnTag.addEventListener("click", inputBox)