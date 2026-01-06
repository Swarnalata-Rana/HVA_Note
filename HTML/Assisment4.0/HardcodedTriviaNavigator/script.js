var questions = [
    {
        questionText: "Which planet is known as the Red Planet?",
        correctAnswer: "Mars",
        incorrectAnswers: ["Venus", "Jupiter", "Mercury"]
    },
    {
        questionText: "What is the capital of Japan?",
        correctAnswer: "Tokyo",
        incorrectAnswers: ["Kyoto", "Osaka", "Nagoya"]
    },
    {
        questionText: "Which instrument has 88 keys?",
        correctAnswer: "Piano",
        incorrectAnswers: ["Guitar", "Violin", "Flute"]
    },
    {
        questionText: "Which gas do plants absorb from the atmosphere?",
        correctAnswer: "Carbon dioxide",
        incorrectAnswers: ["Oxygen", "Nitrogen", "Helium"]
    },
    {
        questionText: "Who wrote 'Romeo and Juliet'?",
        correctAnswer: "William Shakespeare",
        incorrectAnswers: ["Charles Dickens", "Mark Twain", "Jane Austen"]
    },
    {
        questionText: "What is the largest ocean on Earth?",
        correctAnswer: "Pacific Ocean",
        incorrectAnswers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean"]
    }
];

let questionText = document.getElementById("questionText");
let optionsRadio = document.getElementsByClassName("optionRadio");
let optionLabels = document.getElementsByClassName("optionLabel");
let nextBtn = document.getElementById("nextBtn");
let statusArea = document.getElementById("statusArea");

let index = 0;

function questionPage() {
    let currentQues = questions[index];
    questionText.innerText = `${index + 1}. ${currentQues.questionText}`;

    let mergedArray = [currentQues.correctAnswer, ...currentQues.incorrectAnswers];

    for (let i = 0; i < mergedArray.length; i++) {
        optionsRadio[i].value = mergedArray[i];
        optionLabels[i].innerText = mergedArray[i];
        optionsRadio[i].checked = false;
    }

    statusArea.innerText = "";
}

questionPage();

for (let i = 0; i < optionsRadio.length; i++) {

    optionsRadio[i].addEventListener("click", function () {
        let selectedValue = "";

        for (let i = 0; i < optionsRadio.length; i++) {
            if (optionsRadio[i].checked) {
                selectedValue = optionsRadio[i].value;
                break;
            }
        }

        if (selectedValue) {
            let correctAns = questions[index].correctAnswer;

            if (selectedValue === correctAns) {
                statusArea.innerText = "Correct";
            }
            else {
                statusArea.innerText = "Wrong";
            }
        }
    });
}

nextBtn.addEventListener("click", function () {
    index++;

    if (index < questions.length) {
        questionPage();
    }
    else {
        questionText.innerText = "All questions are over.";
        statusArea.innerText = "";
        nextBtn.disabled = true;
    }
});
