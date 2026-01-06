let happyBtn = document.getElementById("happyBtn")
let sadBtn = document.getElementById("sadBtn")
let angryBtn = document.getElementById("angryBtn")
let tiredBtn = document.getElementById("tiredBtn")
let excitedBtn = document.getElementById("excitedBtn")
let moodMessage = document.getElementById("moodMessage")


function removeHiglight() {
    happyBtn.style.backgroundColor = ""
    sadBtn.style.backgroundColor = ""
    angryBtn.style.backgroundColor = ""
    tiredBtn.style.backgroundColor = ""
    excitedBtn.style.backgroundColor = ""
}

happyBtn.addEventListener("click", function () {
    moodMessage.innerText = "Great! Keep smiling today!"
    removeHiglight()
    happyBtn.style.backgroundColor = "red"
})
sadBtn.addEventListener("click", function () {
    moodMessage.innerText = "It's okay to feel down. Take a deep breath."
    removeHiglight()
    sadBtn.style.backgroundColor = "red"
})
angryBtn.addEventListener("click", function () {
    moodMessage.innerText = "Try stepping away for a moment."
    removeHiglight()
    angryBtn.style.backgroundColor = "red"
})
tiredBtn.addEventListener("click", function () {
    moodMessage.innerText = "Make sure to rest and recharge."
    removeHiglight()
    tiredBtn.style.backgroundColor = "red"
})
excitedBtn.addEventListener("click", function () {
    moodMessage.innerText = "Love the energy! Keep it going!"
    removeHiglight()
    excitedBtn.style.backgroundColor = "red"
})