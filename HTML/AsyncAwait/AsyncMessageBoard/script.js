let messageArea = document.getElementById("messageArea")
let btn = document.getElementById("btn")

async function receiveMsg(msg, time) {
    btn.disabled = true
    messageArea.innerText = msg
    messageArea.style.color = "black"

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let random = Math.random()
            if (random > 0.5) {
                resolve("Message loaded successfully!")
            } else {
                reject("Something went wrong!")
            }
        }, time)
    })
}

async function message() {
    try {
        let msg = await receiveMsg("Loading message...", 2000)
        messageArea.innerText = msg
        messageArea.style.color = "green"
    } catch (err) {
        messageArea.innerText = err
        messageArea.style.color = "red"
    }
    btn.disabled = false
}

btn.addEventListener("click", function () {
    message()
})
