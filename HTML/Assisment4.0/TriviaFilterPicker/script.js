let firstSection = document.getElementById("firstSection")
let categorySelect = document.getElementById("categorySelect")
let difficultySelect = document.getElementById("difficultySelect")
let fetchBtn = document.getElementById("fetchBtn")

let secondSection = document.getElementById("secondSection")
let categoryText = document.getElementById("categoryText")
let difficultyText = document.getElementById("difficultyText")
let questionText = document.getElementById("questionText")

let option1 = document.getElementById("option1")
let option2 = document.getElementById("option2")
let option3 = document.getElementById("option3")
let option4 = document.getElementById("option4")

let nextBtn = document.getElementById("nextBtn")

let categoryValue = categorySelect.value
let difficultyValue = difficultySelect.value


secondSection.style.display = "none"

categorySelect.addEventListener("change", function () {
    categoryValue = categorySelect.value
})

difficultySelect.addEventListener("change", function () {
    difficultyValue = difficultySelect.value
})

fetchBtn.addEventListener("click", function () {
    fetchApi()
})


async function fetchApi() {
    try {
        let response = await fetch(`https://the-trivia-api.com/v2/questions?categories=${categoryValue}&difficulties=${difficultyValue}&limit=1`)
        let data = await response.json()

        displayQuestions(data[0])
        firstSection.style.display = "none"
        secondSection.style.display = "block"
    }
    catch (error) {
        console.log(error)
    }
}

function displayQuestions(ques) {
    categoryText.innerText = `Category: ${ques.category}`
    difficultyText.innerText = `Difficulty: ${ques.difficulty}`
    questionText.innerText = `${ques.question.text}`

    let options = [ques.correctAnswer, ...ques.incorrectAnswers]

    option1.innerText = options[0]
    option2.innerText = options[1]
    option3.innerText = options[2]
    option4.innerText = options[3]
}

nextBtn.addEventListener("click", function () {
    secondSection.style.display = "none"
    firstSection.style.display = "block"
})