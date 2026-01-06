let questionText = document.getElementById("qestionText")
let options = document.getElementById("options")
let categoryType = document.getElementById("categoryType")
let dificultyLebel = document.getElementById("dificultyLebel")
let nextBtn = document.getElementById("nextBtn")
let prevBtn = document.getElementById("prevBtn")

let arrayData = []
let index = 0

function questionFetch() {
    fetch("https://the-trivia-api.com/v2/questions?limit=5")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            arrayData = data
            questionsDispaly()
        })
        .catch(function (error) {
            console.log(error)
        })
}

function questionsDispaly() {
    let currentQues = arrayData[index]
    // console.log(currentQues)

    questionText.innerText = `${index + 1}. ${currentQues.question}`
    categoryType.innerText = `Category: ${currentQues.category}`
    dificultyLebel.innerText = `Difficulty: ${currentQues.difficulty}`

    let margeArry = [currentQues.correctAnswer, ...currentQues.incorrectAnswers]
    options.innerText = ``

    margeArry.forEach(function (arr) {
        let pTag = document.createElement("p")
        pTag.innerText = arr
        options.appendChild(pTag)
    })

    if (index === 0) {
        prevBtn.disabled = true
    } else {
        prevBtn.disabled = false
    }

    if (index === arrayData.length - 1) {
        nextBtn.disabled = true
    } else {
        nextBtn.disabled = false
    }
}

nextBtn.addEventListener("click", function () {
    index++
    questionsDispaly()
})

prevBtn.addEventListener("click", function () {
    index--
    questionsDispaly()
})

questionFetch()
