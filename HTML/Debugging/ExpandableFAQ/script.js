let question = document.querySelectorAll(".question")
let answer = document.querySelectorAll(".answer");

answer.forEach(arr => {
    arr.style.display = "none"
})

question.forEach(arr => {
    arr.addEventListener("click", function () {

        let ans = arr.nextElementSibling;

        if (ans.style.display === "none") {
            ans.style.display = "block"
        }
        else {
            ans.style.display = "none"
        }
    })
})