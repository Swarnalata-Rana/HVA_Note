let questionTag = document.getElementById("questionTag")
let categoryTag = document.getElementById("categoryTag")
let difficultyTag = document.getElementById("difficultyTag")
let currectAnswer = document.getElementById("currectAnswer")
let errorMsg = document.getElementById("errorMsg")
let showBtn = document.getElementById("showBtn")
let nextBtn = document.getElementById("nextBtn")

let arrayData = null

function fetchQuestion() {
    currectAnswer.innerText = ""
    errorMsg.innerText = ""

    showBtn.disabled = true
    nextBtn.disabled = true

    fetch("https://the-trivia-api.com/v2/questions?limit=1")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            arrayData = data[0]

            questionTag.innerText = `1. ${arrayData.question.text}`
            categoryTag.innerText = `Category: ${arrayData.category}`
            difficultyTag.innerText = `Difficulty: ${arrayData.difficulty}`
            showBtn.disabled = false

        })
        .catch(function () {
            errorMsg.innerText = "Error fetching question"
            showBtn.disabled = true
            nextBtn.disabled = true
        })
}

fetchQuestion()

showBtn.addEventListener("click", function () {
    if (arrayData) {
        currectAnswer.innerText = `Correct Answer: ${arrayData.correctAnswer}`
        showBtn.disabled = true
        nextBtn.disabled = false
    }
})

nextBtn.addEventListener("click", function () {
    fetchQuestion()
})
